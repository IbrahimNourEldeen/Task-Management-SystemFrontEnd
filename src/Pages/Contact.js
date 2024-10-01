import React from 'react'
import Footer from '../Components/footer';
import Button from 'react-bootstrap/Button';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { GrSend } from "react-icons/gr";
const Contact = () => {
  return (
    <>
    <div  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"100px"}}>
      <h1 style={{fontSize:"30px",fontWeight:"700"}}>Contact Us</h1>

<p style={{fontSize:"12px",fontWeight:"490"}}>We'd love to hear from you! Please fill out the form below and We 'll get in touch.</p>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"100px"}}>
<input placeholder=' Name' style={{fontSize:"10px",minWidth:"50%",width:"290%" ,marginBottom:"15px" }}></input>
<input placeholder=' Email' style={{fontSize:"10px", minWidth:"50%",width:"290%"  ,marginBottom:"14px" }}></input>
<input placeholder=' Phone' style={{fontSize:"10px", minWidth:"50%" ,width:"290%" ,marginBottom:"15px"  }} ></input>
<input placeholder=' Project Budget' style={{fontSize:"10px", minWidth:"50%" ,width:"290%"  ,marginBottom:"14px"  }}></input>
<input placeholder=' service Recuired' style={{fontSize:"10px", minWidth:"50%" ,width:"290%"  ,marginBottom:"15px" }} ></input>
<textarea placeholder=' Message' style={{fontSize:"10px", minWidth:"50%" ,width:"290%"  ,height:"50px",marginBottom:"14px" }} ></textarea>
</div>
<div style={{}}>
<Button variant="success" > <GrSend /> Send Message </Button>{' '}
<Button variant="outline-success"> <PiArrowUDownLeftBold /> Reset</Button>{' '}
</div>
    </div>

  


    <Footer/>
    </>
  )
}

export default Contact