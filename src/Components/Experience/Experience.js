import React, { useEffect } from 'react'
import "./Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos';

function Experience() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='experience' id='Experience'>
            <div className='container' >
                <h2>Work Experience</h2>

                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"  data-aos="fade-right" data-aos-duration="2000">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-1">
                                        <i class="fa fa-pencil icon1"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <div style={{ display: "flex" }}>
                                            <h2>React Js Developer at BridgeFix Technology pvt ltd indore</h2>
                                            <span style={{ color: "#7a7575", marginLeft: "5px" }}>May 2022-Current</span>
                                        </div>
                                        <p>I joined the company from May 2022, since then till now I am working in the same company .</p>
                                    </div>
                                </div>
                            </article> 
                            <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft" data-aos="fade-right" data-aos-duration="2000">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-2">
                                        <i class="fa fa-pencil icon1"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <div style={{ display: "flex" }}>
                                            <h2>Front End Developer at Mxpertz Infolabs pvt ltd indore</h2>
                                            <span style={{ color: "#7a7575", marginLeft: "5px" }}>Oct 2021-March 2022</span>
                                        </div>
                                        <p>3 Month Worked in Mxpertz Infolabs Company on React Js .</p>
                                    </div>
                                </div>
                            </article>
                          <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft" data-aos="fade-right" data-aos-duration="2000">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-3">
                                        <i class="fa fa-pencil icon1"></i>
                                    </div>
                                    <div className="timeline-label">
                                        <div style={{ display: "flex" }}>
                                            <h2>MERN Stack at geeksdoor indore</h2>
                                        </div>
                                        <p>6 Month Intership in geeksdoor Coaching Institute on MERN Stack .</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Experience
