import React from 'react'

import './Spinner.scss'

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className='SpinnerOverlay'>
            <div className='SpinnerContainer'/>
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default Spinner