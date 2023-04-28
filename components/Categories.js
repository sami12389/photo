import { urlFor } from '../lib/client'
import Image from "next/image"
import download from "../assets/download.png"
import React from 'react'

const Categories = ({categoriesData}) => {
  return (
    <>
    <section className = "stopScrollSection">
      <div className = "stopScrollText">
       <h1 className = "scrollHeading">Stop the Scroll</h1>
      <p className = "scrollText">Does your current headshot stop the scroll?  Find out what makes
        my headshots stand out, and how my professional headshot sessions
        will have you looking like the best version of yourself.</p>
      <button className = "scrollButton" type = "button">I'm Interested in Headshots</button>
      </div>
      <Image src = {download} alt= "" height="600" className = "mobileImage"/>
    </section>
    <div className = "categoriesContainer">
       {categoriesData.map((category)=>(
        <div className = "categoryContainer">
        <img className = "categoriesImage" src = {urlFor(category.categoriesImage)} alt = ""/>
        <div className = "categoryTextContainer">
        <h4>{category.categoriesText}</h4>
        <button type = "button">{category.categoriesButton}</button>
        </div>
        </div>
       ))}
    </div>
    </>
  )
}

export default Categories