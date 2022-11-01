import React from 'react'
import useStyles from './useStyles'
import './AuxText.css'

const AuxText = ({text}) => {

    const Styles = useStyles()

  return (
    <div>
        <p className={Styles.aux_text} >{text}</p>
    </div>
  )
}

export default AuxText