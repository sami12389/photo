import React from 'react'

const Breakpoint = ({breakpointData}) => {
    console.log(breakpointData)
  return (
    <div className = 'breakpointContainer'>
        {breakpointData.map((data)=>(
          <section className = "breakpointItem">
        <h1 className = "breakpointHeading">{data.title}</h1>
        <p>{data.number}</p>
          </section>
        ))}
    </div>
  )
}

export default Breakpoint