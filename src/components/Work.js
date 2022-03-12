import React from "react"
import Experience from './Experience/Experience'

// import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          {/* <Fade bottom>
            <h1>My Journey</h1>
          </Fade> */}

          <div className="row">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work