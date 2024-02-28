import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function PortfolioCards(props) {
  return (
            <div className='col-sm-12 col-lg-4 col-md-4 portfoliocard'>
              <img src={props.img} width="100%"></img>
              <h4>{props.projectname}</h4>
              <p>{props.title}</p>
            </div>
  )
}
