import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}//Can use too e.target.innerHTML
            className={classes}>
            {props.label}
        </button>
    )
}

// export default props =>

// <button className={`
//     button
//     ${props.operation ? 'operation' : ''}
//     ${props.double ? 'double' : ''}
//     ${props.triple ? 'triple' : ''}
// `}>
//     {props.label}
// </button>