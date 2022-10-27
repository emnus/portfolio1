import React from 'react'
import './Button.css'
import useStyles from './useStyles'

const Button = () => {
  const Styles = useStyles()
  return (
    <div className={Styles.button_container}>

      <h1 className={Styles.button_text}>si</h1>

    </div>
  )
}

export default Button
