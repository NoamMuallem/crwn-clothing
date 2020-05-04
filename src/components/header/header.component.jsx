// for this component
import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
//other components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
//router
import { Link } from "react-router-dom";
//authentication
import { auth } from "../../firebase/firebase.util";
//redux
import { connect } from "react-redux";
//"reselect" selectors (to prevent needless re-rendering) and other reselect functions
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { currentUserSelector } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect"; //no need to enter the state in every selector call

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

//creating props that get the state (like getters)
const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: selectCartHidden,
});

//returnes a higher order componnent to wrap Header
export default connect(mapStateToProps)(Header);
