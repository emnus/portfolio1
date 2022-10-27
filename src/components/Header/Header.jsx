import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import useStyles from '../Button/useStyles'

const Header = () => {
  const Styles = useStyles();
  return (
    <div className='header_body'>
      <div className='logo_container'>
      <img className='Logo_header' src="" alt="" />
      </div>

      <div className='buttons_header'>
      <Button text="si"/>
      <Button text="sí"/>
      <Button text="si"/>
      <img src="" alt="" />
      </div>
    </div>
  )
}


export default Header