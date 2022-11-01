import React from 'react'
import './CustomCard.css'
import useStyles from './useStyles'
import AuxText from '../AuxText/AuxText'
const CustomCard = () => {

  const Styles = useStyles()

  return (
    <div className={Styles.card_body} >

        <div className={Styles.img_box} >
            
        </div>
        <div className={Styles.text_box} >

          <div className={Styles.card_title__container} >

            <h1 className={Styles.card_text} >Hola</h1>

          </div>

          <div  className={Styles.card_description} >
            

            <AuxText text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cum nesciunt, velit doloribus, non provident possimus consequatur ullam, quidem nam blanditiis culpa aliquid id. Officia, ipsum! Fugit delectus dolores earum? '} />

          </div>
        </div>

    </div>
  )
}

export default CustomCard