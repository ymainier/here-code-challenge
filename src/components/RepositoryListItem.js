import React from 'react'
import PropTypes from 'prop-types'

const RepositoryListItem = ({ name, onSelect }) => (
  <span onClick={() => onSelect(name)}>{name}</span>
)

RepositoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default RepositoryListItem
