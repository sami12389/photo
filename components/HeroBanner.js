import React, {useState} from 'react'
import { urlFor } from '@/lib/client'
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
import {GrClose} from "react-icons/gr"


const HeroBanner = ({bannerData}) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = ()=>{
    setShowNavbar((prev)=>!prev)
  }
  console.log(bannerData)
  const bgImageStyle = {
    backgroundImage: `url(${urlFor(bannerData.image[currentIndex])})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: '100vh',
    width: '100vw',
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    position: 'absolute',
    top: '0',
    left: '0'
  }
  return (
      <div className = "heroContainer">
        <nav className = "navContainer">
          <h2 className = "logoName">Yu-Photography</h2>
          <div className = "navIcon">
            {
              showNavbar ? <GrClose onClick={handleClick} fontSize={30} style = {{cursor: "pointer"}}/> :  <HiOutlineBars3BottomRight onClick={handleClick} fontSize={50} style = {{cursor: "pointer"}}/>
            }
             
              {showNavbar && (
                <ul className = "menuBar">
                  <li className = "menuItem">Maternity Shoot</li>
                  <li className = "menuItem">Maternity Shoot</li>
                  <li className = "menuItem">Maternity Shoot</li>
                  <li className = "menuItem">Maternity Shoot</li>
                </ul>
              )}
          </div>
           <ul className = "navList">
          <li className = "navLink">Maternity Shoot</li>
          <li className = "navLink">Maternity Shoot</li>
          <li className = "navLink">Maternity Shoot</li>
         </ul>
        </nav>  
        <div style = {bgImageStyle}>
          <h2 className = "heroText">{bannerData.heading[currentIndex]}</h2>
        </div>
      </div>
  )
}

export default HeroBanner