import React from 'react'
import PortfolioCards from './PortfolioCards'
import "./Style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Portfolio() {
  return (
    <div id='Portfolio' className='portfolio'>
      <div className='container'>
        <div>
          <h6>My Portfolio</h6>
          <h2>My latest works</h2>
        </div>
        <Carousel interval={5000} infiniteLoop autoPlay>
          <div className='row'>
            <PortfolioCards
              img="https://i0.wp.com/colorlib.com/wp/wp-content/uploads/sites/2/handel-unique-corporate-wordpress-website-template.jpg?ssl=1"
              projectname="Bridgefix Website"
              title="Official website."
            />
            <PortfolioCards
              img="https://colorlib.com/wp/wp-content/uploads/sites/2/niko-resume-website-template.jpg"
              projectname="Resume Builder Project"
              title="It Project Help to Create and Download your Resume"
            />
            <PortfolioCards
              img="https://uploads-ssl.webflow.com/62dc6220b127cefb6acde3ca/62dc7d1b9f4331eedf46405a_automated%20websites%20graphic.png"
              projectname="Jamfeed Music Website"
              title="automated music website."
            />
          </div>
            <div className='row'>
              <PortfolioCards
                img="https://cdn.dribbble.com/users/746931/screenshots/16077352/media/f0c55523532cce82e947519d55ba46a3.png?compress=1&resize=400x300"
                projectname="Personal Portfolio"
                title="It Is My Personal Portfollio."
              />
              <PortfolioCards
                img="https://cdn.slidesharecdn.com/ss_thumbnails/tourismmanagement-130724093916-phpapp02-thumbnail-4.jpg?cb=1374658800"
                projectname="Tourism Management System"
                title="it project provide tour packages for all categories."
              />
              <PortfolioCards
                img="https://bongsrey.sgp1.cdn.digitaloceanspaces.com/library/1250/images/63d238a040393.jpg"
                projectname="Issara Mangement"
                title="It's a Live project."
              />
            </div>
            <div className='row'>
              <PortfolioCards
                img="https://imageio.forbes.com/specials-images/imageserve/5ec567daf2098c0006c6036e/Kimpton-Shanghai-Hotel/960x0.jpg?format=jpg&width=960"
                projectname="Luxery Hotel"
                title="It's a practice project in Next js."
              />
            </div>
        </Carousel>
      </div>
    </div>
  )
}
