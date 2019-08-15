import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../Collection/Collection'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shopActions'
import Spinner from '../../components/Spinner/Spinner'

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview)
const CollectionPageWithSpinner = Spinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner {...props} isLoading={loading} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner {...props} isLoading={loading} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)