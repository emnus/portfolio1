
import React from 'react'
import './Button.css'
import useStyles from './useStyles'
import {useNavigate} from 'react-router-dom'

const Button = ({text}) => {
  const navigate = useNavigate()
  const Styles = useStyles();
  return (
    <div  className={Styles.button_container}>

      <h1 className={Styles.button_text}>{text}</h1>

    </div>
  )
}

export default Button
