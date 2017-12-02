import React from "react";
import PropTypes from "prop-types";

import LanguageListItem from "./LanguageListItem";

const LanguageList = ({ names, onSelect }) => (
  <div>
    <h1>All Repositories</h1>
    <ul>
      {names.map(name => (
        <li key={name}>
          <LanguageListItem name={name} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  </div>
);

LanguageList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default LanguageList;
