import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import useStyles from './useStyles'

const Header = () => {
  const Styles = useStyles();
  return (
    <div className='header_body'>
      <div className='logo_container'>
      <img className='Logo_header' src="" alt="" />
      </div>

      <div className='buttons_header'>
      <Button className='col-1' text="si"/>
      <Button className='col-1' text="sí"/>
      <Button className='col-1' text="si"/>
      <img src="" alt="" />
      </div>
    </div>
  )
}


export default Header