import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import SurveyNew from './components/SurveyNew'

const App = () => {
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

export default App