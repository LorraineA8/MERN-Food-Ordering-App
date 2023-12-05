import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import homepageIcon from '../../assets/DeliveryMan2.jpeg'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Join us for a... 
          <br/><strong className={classes.word}>Finger-lickin' good</strong> time!<br/>
          </h2>
          <p className={classes.firstMsg}> Where every bite is a <span>celebration of flavor.</span></p>
          <p className={classes.secondMsg}>
          Savor the iconic taste of <span>KFC's legendary fried chicken</span>, crafted with our secret blend of<br /><strong><span className={classes.word1}> 11 herbs </span></strong>and spices.
          </p>
          <p className={classes.desc}>
            Your Official Delivery App!!!
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={homepageIcon} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero