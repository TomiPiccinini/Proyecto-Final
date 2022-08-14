import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styled'

export const GenericButton = (props) => {
  return (
    <Button>{props.text}</Button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
}
