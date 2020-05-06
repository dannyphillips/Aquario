import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import tank from '../../containers/tank';

const tankPage = ({ uid, signIn }) => {
  return (
    <Route
      render={({ location }) => {
        return (
          <div>
            <Route exact path="/tank/" render={() => <Redirect to="/" />} />
            <Route
              location={location}
              key={location.key}
              path="/tank/:tankId/"
              render={props => <tank {...props} uid={uid} signIn={signIn} />}
            />
          </div>
        );
      }}
    />
  );
};

tankPage.propTypes = {
  uid: PropTypes.string,
  signIn: PropTypes.func.isRequired,
};

export default tankPage;
