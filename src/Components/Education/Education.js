import React, { useEffect } from 'react'
import "./Style.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Cards from '../Cards/Cards';
import circle from "../../Images/circle.png"
import Aos from 'aos';


export default function Education() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id='Education' className='education'>
            <h1 >My Education</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="bubble b_six" style={{  marginLeft:" 120px"}}></div>
                <div className="bubble b_six3" style={{ marginLeft: "-174px",marginTop:"133px"}}></div>
                <div className="bubble b_six2"  style={{ marginRight: "55px"}}></div>
            </div>
            <div className='education_containt'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 col-md-6 '>
                        <div className='educationdata'>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{ display: "flex" }}>
   
                                <div className="bubble b_six2" style={{ marginRight: "55px"}}></div>
                                <Cards year="2018-2020" degree=" MCA" clgname=" IPS Acadamy Indore" />
                            </div>
                        </div>
                        <div>
                               <div className="bubble b_six3" style={{marginLeft:"-170px",marginTop:"133px"}}></div>
                               <div className="bubble b_six4" style={{marginLeft: "277px"}}></div>

                            <div className='educationdata2' data-aos="fade-right" data-aos-duration="3000">
                                <Cards year="2014-2015" degree=" 12th" clgname=" Shree Umiya Girls H.S. School Mandleshwer" />
                            </div>
                            <div className="bubble b_six5" style={{marginLeft:"-10  0px"}}></div>
                            <div className="bubble b_six2" style={{marginLeft:"100px",marginTop: "100px",marginRight: "55px"}}></div>

                        </div>
                        <div>
                        </div>

                    </div>
                    <div className='col-sm-12 col-lg-1 col-md-1' style={{ display: "flex", justifyContent: "left" }}>
                        <div style={{ background: "black", width: "8%", borderTopRightRadius: "20%", borderBottomLeftRadius: "20%" ,marginLeft:"-30px"}}>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5 col-md-5 '>
                    <div className="bubble b_six4" style={{marginLeft: "277px"}}></div>
                    <div className="bubble b_six"  style={{  marginLeft:" 65px",marginTop:"152px"}}></div>
                        <div className='Edata' data-aos="fade-left" data-aos-duration="2000"style={{ display: "flex" }}>
                            <Cards year="2015-2018" degree="BSC with Computer Science" clgname=" SUGC Mandleshwer" />
                        </div>
                            <div class="bubble b_six5" style={{ marginLeft: "520px"}}></div>
                            <div class="bubble b_six2" style={{ marginTop: "120px"}}></div>
                        <div className='Edata2 ' data-aos="fade-left" data-aos-duration="3000">
                            <Cards year="2012-2013" degree="10th" clgname="Shree Umiya Girls H. School Mandleshwer" />
                        </div>
                        <div class="bubble b_six" style={{ marginLeft: "420px"}}></div>

                    </div>
                </div>
            </div>
        </div>


    )
}
