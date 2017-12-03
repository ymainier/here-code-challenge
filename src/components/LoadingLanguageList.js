import React from "react";
import PropTypes from "prop-types";

const LoadingLanguageList = ({ name }) => (
  <p className="loading">Loading {name} language list</p>
);

LoadingLanguageList.propTypes = {
  name: PropTypes.string.isRequired
};

export default LoadingLanguageList;
