import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ onBackToRepositoryList }) => (
  <div>
    <p>Oops something went wrong</p>
    <a onClick={onBackToRepositoryList}>Back to repository list</a>
  </div>
)

Error.propTypes = {
  onBackToRepositoryList: PropTypes.func.isRequired
}

export default Error
