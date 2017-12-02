import React from "react";
import PropTypes from "prop-types";

const LoadingLanguageList = ({ name }) => <p>Loading {name} language list</p>;

LoadingLanguageList.propTypes = {
  name: PropTypes.string.isRequired
};

export default LoadingLanguageList;
