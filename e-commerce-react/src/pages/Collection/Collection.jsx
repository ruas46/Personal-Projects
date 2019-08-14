import React from 'react'
import { connect } from 'react-redux'

import './Collection.scss'

import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { selectCollection } from '../../redux/shop/shopSelectors'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <div className="title">{title}</div>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)