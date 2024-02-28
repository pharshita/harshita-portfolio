import React from 'react'
import "./Style.css"
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import services from "../../Images/services.png"

export default function Services() {
  return (
    <div className='services' id='Service'>

    <div className='container' >
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 servicesicon'>
                <img src={services}></img>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 servicesdata'>
                <div>
                <h6>WHAT I DO ?</h6>
                <h2>Innovative Solutions To Grow Your Creative Projects</h2>
                <p>I’m Harshita Patidar, a Web developer.I love what I do. I take great pride in what I do</p>
                <h6><DeveloperBoardOutlinedIcon sx={{fontSize:"27px"}}/>&nbsp;&nbsp;Web Development</h6>
                <h6><DesktopMacOutlinedIcon sx={{fontSize:"27px"}}/>&nbsp;&nbsp;Web Designing</h6>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
