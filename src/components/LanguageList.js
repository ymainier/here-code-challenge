import React from "react";
import PropTypes from "prop-types";

const LanguageList = ({
  name,
  languageRepartition,
  onBackToRepositoryList
}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {Object.keys(languageRepartition).map(language => (
        <li key={language}>
          {language}: {languageRepartition[language]}
        </li>
      ))}
    </ul>
    <a onClick={onBackToRepositoryList}>Back to repository list</a>
  </div>
);

LanguageList.propTypes = {
  name: PropTypes.string.isRequired,
  languageRepartition: PropTypes.objectOf(PropTypes.number),
  onBackToRepositoryList: PropTypes.func.isRequired
};

export default LanguageList;
