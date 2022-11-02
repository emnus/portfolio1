import React from 'react'
import './CustomCard.css'
import useStyles from './useStyles'
import AuxText from '../AuxText/AuxText'
const CustomCard = ({title ='Card Title', text}) => {

  const Styles = useStyles()
  


  return (
    <div className={Styles.card_body} >
        
        <div className={Styles.img_box} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/American-Automobile-Association-Logo.svg/800px-American-Automobile-Association-Logo.svg.png" alt="" />
        </div>
        <div className={Styles.text_box} >

          <div className={Styles.card_title__container} >

            <h1 className={Styles.card_title} >{title}</h1>

          </div>

          <div  className={Styles.card_description} >
            
            <AuxText text={text} />
          </div>
        </div>

    </div>
  )
}

export default CustomCard