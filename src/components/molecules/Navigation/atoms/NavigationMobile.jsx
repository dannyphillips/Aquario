import React from 'react';
import { Link } from 'gatsby';
import { LANDING, HOME, ACCOUNT } from '../../../../constants/routes';
import SignOutButton from './SignOutButton';

const NavigationAuth = () => (
  <div className="navbar-mobile">
    <div className="navbar-mobile__inner">
      <div className="navbar-mobile__left">
        <div className="navbar-mobile__logo">
          <Link to={LANDING}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQpF9FqbFiuhAohxs9UkTIkkJbAv_IU0cXHRxsKpoFFSgfXC7"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-mobile__links">
          <div className="navbar-mobile__link">
            <Link to={LANDING}>Landing</Link>
          </div>
          <div className="navbar-mobile__link">
            <Link to={HOME}>Home</Link>
          </div>
          <div className="navbar-mobile__link">
            <Link to={ACCOUNT}>Account</Link>
          </div>
        </div>
      </div>

      <div className="navbar-mobile__user">
        <div className="navbar-mobile__item">
          <SignOutButton />
        </div>
      </div>
    </div>
  </div>
);

export default NavigationAuth;
