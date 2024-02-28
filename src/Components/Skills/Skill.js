import React from 'react'
import "./Style.css"
import skill from "../../Images/skill.png"
import HTML from '../../Images/HTML.png'
import javascript from '../../Images/javascript.png'
import react from '../../Images/React.png'
import Bootstrap from '../../Images/Bootstrap.png'
import MUI from '../../Images/mui.png'
import CSS from '../../Images/css.png'
import Jquery from '../../Images/jquery.png'
import Github from '../../Images/github.png'
import nextjs from '../../Images/nextjs..png'
import redux from '../../Images/redux.png'
import node from '../../Images/node.png'
import express from '../../Images/express.png'

export default function Skill() {
    return (
        <div id='Skills' className='skills'>
            <div className='container'>
                <div className='row' style={{justifyContent: "space-between"}}>
                    <div className='col-sm-12 col-lg-6 col-md-6 skills_containt'>
                        <div className='c1'>
                            <h3>My Skills</h3>
                            <div className='row mt-5'>
                                <div className='col-lg-4 col-md-4 col-sm-12' style={{ borderRight: "1px solid black", display: "flex", justifyContent: "center" }}>
                                    <div>
                                        <div className="skills_data" >
                                            <img src={react} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;React Js</h5>
                                        </div>
                                        <div className="skills_data">
                                            <img src={javascript} width={30} height={30}></img>
                                            <h5>&nbsp;&nbsp;javascript</h5>
                                        </div>
                                        <div className="skills_data">
                                            <img src={CSS} width={30} height={30}></img>
                                            <h5>&nbsp;&nbsp;CSS</h5>
                                        </div>
                                        <div className="skills_data" id='mui_id'>
                                            <img src={MUI} width={30} height={30}></img>
                                            <h5>&nbsp;&nbsp;Material UI</h5>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12' style={{ borderRight: "1px solid black", display: "flex", justifyContent: "center" }}>
                                    <div>
                                        <div className="skills_data1"  >
                                            <img src={node} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;Node JS</h5>
                                        </div>
                                        <div className="skills_data1">
                                            <img src={express} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;Express</h5>
                                        </div>
                                        <div className="skills_data1" >
                                            <img src={Bootstrap} width={50} height={40}></img>
                                            <h5>&nbsp;&nbsp;Bootstrap</h5>
                                        </div>

                                        <div className="skills_data1" style={{ border: "none" }}>
                                            <img src={Github} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;Github</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12' style={{ display: "flex", justifyContent: "center" }}>
                                    <div>

                                        <div className="skills_data1">
                                            <img src={nextjs} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;Next js</h5>
                                        </div>
                                        <div className="skills_data1">
                                            <img src={redux} width={40} height={30}></img>
                                            <h5>&nbsp;&nbsp;Redux</h5>
                                        </div>
                                        <div className='skills_data1'>
                                            <img src={HTML} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;HTML</h5>
                                        </div>
                                        <div className="skills_data1" style={{ border: "none" }}>
                                            <img src={Jquery} width={40} height={40}></img>
                                            <h5>&nbsp;&nbsp;Jquery</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5 col-md-6' style={{display:"flex",alignItems:"center"}}>
                        <img src={skill} width="100%" ></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
