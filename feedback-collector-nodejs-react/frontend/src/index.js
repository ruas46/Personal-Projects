import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'

// Only for dev test
import axios from 'axios'
window.axios = axios
/*
in console, logged, can use axios to test a request, like:
const survey = { title: 'my title', subject: 'my subject', recipients: 'guilhermeruas@hotmail.com', body: 'email Body....' };
axios.post('/api/surveys', survey);
*/

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
 )