import React from 'react';
import { Link, withRouter } from 'react-router';
import DashboardContainer from '../dashboard/dashboard_container';

const Browse = () => {
  return (
    <div>
      <DashboardContainer />
      <div className="browser-content"/>
    </div>
  );
};

export default Browse;