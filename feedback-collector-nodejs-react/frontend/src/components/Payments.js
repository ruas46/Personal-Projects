import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}//amount uses cents (500 = 5 Money)
                token={t => this.props.handleToken(t)}//Receive a callback to execute after receive token from Stripe
                stripeKey={'pk_test_NVrFbuOkTabXVAjusbFVZAcn00POAcaopX'}//Stripe Publish Key
                name="Feedback-Collector"
                description="$5 for 5 email credits"
                //Child component will be use as button
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments)