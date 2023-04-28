import React from 'react'
import {HeroBanner, Video, Breakpoint, Testemonies, Categories, Footer} from "../components"
import {client} from "../lib/client"


const index = ({bannerData, videoData, breakpointData, testemoniesData, categoriesData, footerData, linksData}) => {
  return (
    <>
   <HeroBanner bannerData = {bannerData.length && bannerData[0]}/>
   <Video videoData = {videoData.length && videoData}/>
   <Breakpoint breakpointData={breakpointData.length && breakpointData}/>
   <Categories categoriesData = {categoriesData.length && categoriesData}/>
   <Breakpoint breakpointData={breakpointData.length && breakpointData}/>
   <Testemonies testemoniesData = {testemoniesData.length && testemoniesData}/>
   <Footer footerData = {footerData.length && footerData} linksData = {linksData && linksData}/>
    </>
  )
}

export default index


export const getServerSideProps = async()=>{
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  const videoQuery = '*[_type == "video"]';
  const videoData = await client.fetch(videoQuery);

  const breakpointQuery = '*[_type == "breakpoint"]';
  const breakpointData = await client.fetch(breakpointQuery);

  const testemoniesQuery = '*[_type == "testemonies"]';
  const testemoniesData = await client.fetch(testemoniesQuery);

  const categoriesQuery = '*[_type == "categories"]';
  const categoriesData = await client.fetch(categoriesQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  const linksQuery = '*[_type == "links"]';
  const linksData = await client.fetch(linksQuery);


  return{
    props:{
      bannerData,
      testemoniesData,
      categoriesData,
      footerData,
      linksData,
      videoData,
      breakpointData
    }
  }
}