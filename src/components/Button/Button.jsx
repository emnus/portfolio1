import React from 'react'
import './Button.css'
import useStyles from './useStyles'

const Button = ({text, className}) => {
  const Styles = useStyles({className});
  return (
    <div className={Styles.button_container}>

      <h1 className={Styles.button_text}>{text}</h1>

    </div>
  )
}

export default Button
