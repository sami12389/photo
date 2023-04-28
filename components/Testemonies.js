import React from 'react'
import {urlFor} from "../lib/client"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Testemonies = ({testemoniesData}) => {
  return (
    <div className = "testemoniesContainer">
        {testemoniesData.map((item)=>(
            <>
            <p className = "testemoniesText">{item.desc}</p>
            <img src = {urlFor(item.image)} alt = "profile" className = "profileImage"/>
            <h4>{item.name}</h4>
            <p>{item.position}</p>
            <div className = "iconsContainer">
            <AiOutlineArrowLeft fontSize={30}/>
            <AiOutlineArrowRight fontSize={30}/>
            </div>
            </>
        ))}
    </div>
  )
}

export default Testemonies