import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './CartDropdown.scss'

import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default connect(mapStateToProps)(CartDropdown)