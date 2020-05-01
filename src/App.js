import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
//router
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//authentication
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
//redux
import { connect } from "react-redux";
//import actions
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  //a function we get from firebase that allows for the session termination
  //active when usr is sign in
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //runs when the auth status is changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if we gt a userAuth and its not null
        const userRef = await createUserProfileDocument(userAuth);

        //listen to changes about the user data
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        //setting currentUser to nul if user is not sign in, userAuth is null...
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    //will close the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

//gets all state, distructure and get only the user
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

//because app.js only pushing user data/ state forwored and does not change it we put null a the
//first argument to connect

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
