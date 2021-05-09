import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { Redirect, Route, HashRouter as Router, Switch } from 'react-router-dom';

import * as propTypes from 'src/constants/propTypes';

import Dashboard from 'src/components/Dashboard';

class Routes extends PureComponent {
  static propTypes = {
    actions     : propTypes.actions.isRequired,
    errors      : propTypes.errors,
  }

  render() {
    /* eslint-disable max-len */
    return (
      <Router>
        <Switch>
          <Route component={ Dashboard } exact path="/" />
        </Switch>
      </Router>
    );
    /* eslint-enable max-len */
  }
}


function mapStateToProps({ authentication }) {
  return {
    accessToken : authentication.get('accessToken'),
    email       : authentication.get('email'),
    errors      : authentication.get('errors'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
