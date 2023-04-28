import React from 'react'
import {BsYoutube, BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import { urlFor } from '../lib/client'

const Footer = ({footerData, linksData}) => {
    console.log(linksData)
  return (
    <>
    <div className = "formContainer">
        <div className = "footerContactContainer">
        <div className = "footerContact">
        <h3>{footerData[0].footerPromotions}</h3>
        <input className = "inputField" type = "text" placeholder = "Name"/>
        <input className = "inputField" type = "email" placeholder = "Email"/>
        <button type = "submit" className = "btn">SUBMIT</button>
        </div>
        <div className = "otherWorkContainer">
        <h3>My other Works</h3>
        <ul className = "otherWorkList">
            <li className = "otherWork">HeadShot</li>
            <li className = "otherWork">Wedding</li>
        </ul>
        </div>
        </div>
        <div className = "footerIconsContainer">
        <div className = "footerIcons">
        <BsFacebook fontSize={30}/>
        <AiFillInstagram fontSize={30}/>
        <BsYoutube fontSize={30}/>
        </div>
        <small>&copy;2023 Yu-photograhpy LLC</small>
        </div>
    </div>
    </>
  )
}

export default Footer