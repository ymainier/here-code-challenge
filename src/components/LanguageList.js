import React from "react";
import PropTypes from "prop-types";

const LanguageList = ({
  name,
  languageDistribution,
  onBackToRepositoryList
}) => (
  <div className="language-list">
    <header>
      <h1>{name}</h1>
    </header>
    <ul>
      {Object.keys(languageDistribution).map(language => (
        <li key={language}>
          <progress
            max="100"
            value={Math.ceil(languageDistribution[language])}
          />
          <p>
            {language} {languageDistribution[language]} %
          </p>
        </li>
      ))}
    </ul>
    <footer>
      <a className="button" onClick={onBackToRepositoryList}>
        Back to repository list
      </a>
    </footer>
  </div>
);

LanguageList.propTypes = {
  name: PropTypes.string.isRequired,
  languageDistribution: PropTypes.objectOf(PropTypes.number),
  onBackToRepositoryList: PropTypes.func.isRequired
};

export default LanguageList;
