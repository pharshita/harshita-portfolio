import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import "./Style.css"
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Swal from 'sweetalert2';
import { Stack } from '@mui/system';
export default function Contact() {
    const form = useRef();

    
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const sendmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9yho347', 'template_fzhj46g', form.current, 'knyQCP_wAuAnqsvNt')
            .then((result) => {
                console.log(result.text)
                if (result.text == "OK") {
                    Toast.fire({
                        icon: 'success',
                        title: 'Submitted Successfully'
                      })
                      setTimeout(()=>{
                          document.getElementById("inputdata").value = ""
                          document.getElementById("inputdata2").value = ""
                          document.getElementById("inputdata3").value = ""
                      },[3000])
                }
            }).catch(err =>
                console.log(err.text))
    }
    return (
        <>
            <div id='Contact' className='contact'>
                <div className='container'>
                    <div className='row form'>
                        <div className='col-sm-12 col-md-5 col-lg-5'>
                            <div>
                                <h6>Get in Touch</h6>
                                <h2>Talk with Me</h2>
                            </div>
                            <div className='mt-5'>
                                <div className='mydata'>
                                    <PhoneInTalkOutlinedIcon sx={{ width: "auto", height: "47px", color: "#0db3c7" }} />
                                    &nbsp; &nbsp; &nbsp;<div>
                                        <h7>Call Me now</h7>
                                        <h4><a href="tel:+917697617418">+91 7697617418</a></h4>
                                    </div>
                                </div>

                                <div className='mydata'>
                                    <EmailOutlinedIcon sx={{ width: "auto", height: "47px", color: "#0db3c7" }} />
                                    &nbsp; &nbsp; &nbsp;<div>
                                        <h7>Contact Me</h7>
                                        <h4><a href="mailto:harshitahppatidar@gmail.com">harshitahppatidar@gmail.com </a></h4>
                                    </div>
                                </div>

                                <div className='mydata'>
                                    <LocationOnOutlinedIcon sx={{ width: "auto", height: "47px", color: "#0db3c7" }} />
                                    &nbsp; &nbsp; &nbsp;<div>
                                        <h7>Address</h7>
                                        <h4>Indore,India</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-12 col-md-7 col-lg-7'>
                            <div>
                                <h6>Contact Me</h6>
                                <h2>Let me know here</h2>
                            </div>
                            <div>
                                <form ref={form} className='mt-5' onSubmit={sendmail}>
                                    <div className='mydata'>
                                        <input placeholder='Your Name' className='inputdata' autoComplete='off' name='name' id='inputdata' />
                                    </div>
                                    <div className='mydata'>
                                        <input placeholder='Your Email' className='inputdata' autoComplete='off' name='user_email' id='inputdata2' />
                                    </div>
                                    <div className='mydata'>
                                        <textarea placeholder="Your Message ..." className='textareadata' style={{ height: "100px" }} name="message" id='inputdata3'></textarea>
                                    </div>
                                    <div className='mydata'>
                                        <button type='submit' value="Send">Send Message</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
