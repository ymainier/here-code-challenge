import React from "react";
import PropTypes from "prop-types";

const LanguageList = ({
  name,
  languageDistribution,
  onBackToRepositoryList
}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {Object.keys(languageDistribution).map(language => (
        <li key={language}>
          {language}: {languageDistribution[language]}
        </li>
      ))}
    </ul>
    <a onClick={onBackToRepositoryList}>Back to repository list</a>
  </div>
);

LanguageList.propTypes = {
  name: PropTypes.string.isRequired,
  languageDistribution: PropTypes.objectOf(PropTypes.number),
  onBackToRepositoryList: PropTypes.func.isRequired
};

export default LanguageList;
