import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import "./Style.css"
import user from "../../Images/usericon.png"
import table from "../../Images/table.png"
import download from "../../Images/download.png"
import c from "../../Images/c++.png"
import search from "../../Images/search.png"
import code from "../../Images/code.png"
import curle from "../../Images/curle.png"
import { width } from '@mui/system'

export default function Navbar() {
  const [navColor, setnavColor] = useState("transparent");
  const [logoColor, setlogoColor] = useState("black");
  const [logoColor1, setlogoColor1] = useState("white");
  const [navcolors, setnavcolors] = useState("#0eb3c7")
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#0eb3c7") : setnavColor("transparent");
    window.scrollY > 10 ? setlogoColor("white") : setlogoColor("black");
    window.scrollY > 10 ? setnavcolors("white") : setnavcolors("#0eb3c7");

  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const handleclick = () => {
    window.location.href = "#Contact"
  }
  const clicked = () => {
    window.location.href = "#Home"
  }
  const homedatas = () =>{
  
  }
  return (
    <>
      <div className='bannerdata'>
        <nav className="navbar navbar-expand-lg nav__container__actions" id='navs' style={{ backgroundColor: navColor, }}>
          <a className="navbar-brand" style={{ color: logoColor }} onClick={clicked}>My Portfolio</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto navs" >
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Home" style={{ color: navcolors }}>Home</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="About" style={{ color: navcolors }}>About</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Experience" style={{ color: navcolors }}>Experience</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Education" style={{ color: navcolors }}>Education</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Service" style={{ color: navcolors }}>Services</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Portfolio" style={{ color: navcolors }}>Portfolio</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Skills" style={{ color: navcolors }}>Skills</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="Contact" style={{ color: navcolors }}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light for_mobile" >
          <a className="navbar-brand" onClick={clicked}>My Portfolio</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
              <Link className="nav-link" activeClass="active" spy to="Home" onClick={homedatas} style={{ color: logoColor1 }}>Home</Link>
              </li>
              <li class="nav-item" >
                <Link className="nav-link" activeClass="active" spy to="About" style={{ color: logoColor1 }}>About</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" activeClass="active" spy to="Experience" style={{ color: logoColor1 }}>Experience</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" activeClass="active" spy to="Education" style={{ color: logoColor1 }}>Education</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" activeClass="active" spy to="Service" style={{ color: logoColor1 }}>Services</Link>
              </li>
              <li class="nav-item dropdown">
                <Link className="nav-link" activeClass="active" spy to="Portfolio" style={{ color: logoColor1 }}>Portfolio</Link>
              </li>
              <li class="nav-item dropdown">
                <Link className="nav-link" activeClass="active" spy to="Skills" style={{ color: logoColor1 }}>Skills</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" activeClass="active" spy to="Contact">Contact</Link>

              </li>
            </ul>

          </div>
        </nav>




      </div>
      <div className='banner' id='Home'>
        <div>
          <div className='row'>
            <div className='col-sm-12 col-lg-6 col-md-6 namehead'>
              <div>
                <h1>Hey There!<br />I'm Harshita Patidar <br />React JS Developer</h1>
                <button onClick={handleclick}>Hire Me</button>
              </div>
            </div>
            <div className='col-sm-12 col-lg-6 col-md-6 vactor'>
              <img src={user}></img>
              <img src={table}></img>
              <img src={download}></img>
              <img src={c}></img>
              <img src={search}></img>
              <img src={code}></img>
              <img src={curle}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
