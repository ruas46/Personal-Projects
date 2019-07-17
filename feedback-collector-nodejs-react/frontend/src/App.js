import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import SurveyNew from './components/SurveyNew'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)