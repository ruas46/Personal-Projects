import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SingInAndUp from './pages/SignInAndUp/SignInAndUp'
import Header from './components/Header/Header'
import { auth, createUserProfile } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact path='/signin'
            render={
              () => this.props.currentUser ?
                (<Redirect to ='/' />)
                :
                (<SingInAndUp />)
            }
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
