import React from 'react'
import "./Style.css"
import about from "../../Images/about.png"

export default function About() {
  return (
    <div id='About'>

      <div className='aboutme' >

        <div className='container'>
          <div className='row ' >
            <div className='col-sm-12 col-lg-6 col-md-6 about '>
              <img src={about}></img>
            </div>
            <div className='col-sm-12 col-lg-6 col-md-6 about_containt'>
              <div>
                <h2>About Me</h2>
                <h6>React Developer</h6>
                <p>To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.I hereby declare that the information furnished above is true to the best of my knowledge. I do hereby
                  declare that above particular of information and facts stated and true, correct and complete to the best of my knowledge and belief.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
