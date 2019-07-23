import React from 'react'

// { input } == props.input
export default ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input { ...input } />
        </div>          
    )
}