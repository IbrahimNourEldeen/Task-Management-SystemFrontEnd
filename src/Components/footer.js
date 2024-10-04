import { GiFalconMoon } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import  ButtonsExample from './inputsubscribe';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Footer() {
    return ( 

<>
<div className="col align-self-end text-center justify-content-center" style={{ alignContent:"end", width:"100%",  backgroundColor:"azure", }}>


<h1 className="mb-5 m-3" style={{fontSize:"3rem" ,fontWeight:'bold',textAlign:"center"}}> <GiFalconMoon />Task Manegar</h1>
 <h2 className="m-5  text-center ">subscribe to our website</h2>

<div className="row d-flex justify-content-center m-5">   
<InputGroup className="mb-3">
  <Form.Control
    placeholder= "your email"/>
  <Button variant="success" id="button-addon2">
    subscribe
  </Button>
</InputGroup >
</div>

<div className="row" style={{display:"flex",flexFlow:"wrap col",justifyContent:"space-evenly",alignItems:"center"}}>
<div className="col " >
<h3>Product</h3>
      <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Features</a>
      <a style={{ textdecoration: 'none',display: "block",color: 'black'}} href="#">Pricing</a>
     
     </div>
<div className="col " >
        <h3>Resources</h3>
        <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Blog</a>
        <a style={{ textdecoration: 'none',display: "block",color: 'black'}} href="#">User guides</a>
        <a style={{ textdecoration: "none",display:' block',color:' black'}}href="#">Webinars</a>
      </div>
      <div className="col " >
      <h3>Company</h3>
      <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Contact us</a>
      </div>
<br></br>
<br></br>
<div >
<p style={{textdecoration: 'none',color: 'black'}}>
<br></br>
© 2024 Brand. inc <a style={{textdecoration: 'none',color: 'black'}}  href="#"> • Privacy </a> <a style={{textdecoration: 'none',color: 'black'}} href="#">• Terms </a> <a  style={{textdecoration: 'none',color: 'black'}} href="#">• Sitemap </a>
</p>
<div className=" col m-3">
<a  href="#" style={{ textdecoration: 'none',display: 'inline',color: 'black'}}>  <FaTwitter style={{color:"#1DA1F2"}}/> </a>

<a  href="#" style={{ textdecoration: 'none',display: 'inline',color: 'black'}}> <FaFacebook style={{color:"#1877F2"}}/> </a>

<a  href="#" style={{ textdecoration: 'none',display: 'inline',color: 'black'}}> <IoLogoLinkedin style={{color:"#0077B5"}}/> </a>

<a  href="#" style={{ textdecoration: 'none',display: 'inline',color: 'black'}}> <FaYoutube style={{color:"#FF0000"}}/>  </a>
</div>
</div>

      </div>




</div>
</>
    );}

    export default Footer;