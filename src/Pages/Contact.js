import React from 'react'
import Footer from '../Components/footer';
import Button from 'react-bootstrap/Button';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { GrSend } from "react-icons/gr";
const Contact = () => {
  return (
    <>

    <div  className=' container mb-5 mt-5 pb-5 font-weight-bold text-center ' > <h1 >Contact Us</h1>

<p className="text-justify" style={{fontSize:"1rem",fontWeight:"490"}}>We'd love to hear from you! Please fill out the form below and We 'll get in touch.</p>
<div className='row m-0 '>
<div className=' col-md-12  p-0 pt-4 m-auto'>
  <div className='row d-flex justify-content-center'>
    <div className='col-md-6 '>
      <div className='mb-3 '>
<input className=' form-control mb-3'  placeholder=' Name' ></input>
<input className=' form-control mb-3' placeholder=' Email' ></input>
<input className=' form-control mb-3' placeholder=' Phone'  ></input>
<input className=' form-control mb-3' placeholder=' Project Budget'></input>
<input className=' form-control mb-3' placeholder=' service Recuired'></input>
<textarea className=' form-control mb-3' rows="3" placeholder=' Message'  ></textarea>
</div>
</div>
</div>
</div>
</div>
<div className=' m-3 me-5'>
<a className=' m-2' href='#'><Button variant="success" > <GrSend /> Send Message </Button></a>

<a href='#'><Button variant="outline-success"> <PiArrowUDownLeftBold /> Reset</Button></a>
</div>

    </div>

    <Footer />

    </>
  )
}

export default Contact