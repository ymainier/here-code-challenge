import React from 'react'
import PropTypes from 'prop-types'

const LanguageListItem = ({ name, onSelect }) => (
  <span onClick={() => onSelect(name)}>{name}</span>
)

LanguageListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default LanguageListItem
