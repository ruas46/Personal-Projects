import React from 'react'

import ShopData from './shopData.js'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            collections: ShopData
        }
    }

    render() {
        const {collections} = this.state
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage