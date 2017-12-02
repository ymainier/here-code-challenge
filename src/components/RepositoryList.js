import React from "react";
import PropTypes from "prop-types";

import RepositoryListItem from "./RepositoryListItem";

const RepositoryList = ({ names, onSelect }) => (
  <div>
    <h1>All Repositories</h1>
    <ul>
      {names.map(name => (
        <li key={name}>
          <RepositoryListItem name={name} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  </div>
);

RepositoryList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default RepositoryList;
