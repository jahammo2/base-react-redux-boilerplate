import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as basePropTypes from 'src/constants/propTypes/base';
import * as foosActionCreators from 'src/actions/foos';

import Dashboard from 'src/components/Dashboard';

function FunctionalDashboard(props) {
  return <Dashboard { ...props } />;
}

function mapStateToProps({ foos }) {
  return {
    foos : foos.getIn(['loaded', 'foos']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : {
      foos : bindActionCreators(foosActionCreators, dispatch),
    },
  };
}

FunctionalDashboard.propTypes = {
  actions : basePropTypes.actions.isRequired,
  foos    : basePropTypes.foos,
};

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalDashboard);
