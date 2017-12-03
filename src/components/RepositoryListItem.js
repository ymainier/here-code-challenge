import React from "react";
import PropTypes from "prop-types";

const RepositoryListItem = ({ name, onSelect }) => (
  <a onClick={() => onSelect(name)}>{name}</a>
);

RepositoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default RepositoryListItem;
