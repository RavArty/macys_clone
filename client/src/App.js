import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

//import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
//import { setCurrentUser } from './redux/user/user.actions';
import { checkUserSession } from './redux/user/user.actions';

import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import './App.css'

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession() 
  }, [checkUserSession ]) 
// unsubscribeFromAuth = null;


  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
      </Switch>
    </div>
  );
  
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// const mapDispatchToProps = dispatch => ({
// //  setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
