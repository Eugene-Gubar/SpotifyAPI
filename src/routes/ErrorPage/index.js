import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ErrorPage = ({ location }) => {

  const { pathname } = location;

  return (
    <div className="error-page">
      <div className="wrap-container">
        <h1>Not Found</h1>
        <h3>
          No match for <code>{pathname}</code>
        </h3>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  location: PropTypes.object
};

export default ErrorPage;
