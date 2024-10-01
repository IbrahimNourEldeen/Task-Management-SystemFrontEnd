import { GiFalconMoon } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import  ButtonsExample from './inputsubscribe';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return ( 

<>
<div style={{textAlign:"center", alignItems:"center", justifyContent:"center", width:"100%",  backgroundColor:"azure", }}>
{/* <h1 style={{fontSize:"" ,minWidth:"200px",color:"green"}}>stay warm in style</h1>
<p  style={{display:"blok"}}> Streamline your workflow and boost productivity with our intuitive task management tool</p>
<p>Streamline your workflow</p>
<Button style={{marginBottom:'10%',margin:'30px'}} variant="success">Get Started For Free</Button> */}


<h1 style={{fontSize:"35px" ,fontWeight:'bold',textAlign:"center",marginBottom:'50px'}}> <GiFalconMoon />Task Manegar</h1>
<p style={{ display:"flex ",flexflow:"wrap col" ,fontSize:"25px",maxWidth:"700px" ,textAlign:"center",fontWeight:'bold',marginLeft:'25%'}}> subscribe to our website< ButtonsExample style={{Width:"300px"}} /></p>


<div className="row" style={{display:"flex",flexFlow:"wrap col",justifyContent:"space-evenly",alignItems:"center"}}>


<div className="col m" >
<h3>Product</h3>
      <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Features</a>
      <a style={{ textdecoration: 'none',display: "block",color: 'black'}} href="#">Pricing</a>
     
     </div>
<div className="col m" >
        <h3>Resources</h3>
        <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Blog</a>
        <a style={{ textdecoration: 'none',display: "block",color: 'black'}} href="#">User guides</a>
        <a style={{ textdecoration: "none",display:' block',color:' black'}}href="#">Webinars</a>
      </div>
      <div className="col m" >
      <h3>Company</h3>
      <a style={{ textdecoration: 'none',display: 'block',color: 'black'}} href="#">Contact us</a>
      </div>
<br></br>
<br></br>
<div style={{display:"inline-block"}}>
<p>
<br></br>
© 2024 Brand. inc  • Privacy • Terms • Sitemap
</p>
<pre style={{fontWeight:"60px"}}>  <FaTwitter style={{color:"#1DA1F2"}}/> <FaFacebook style={{color:"#1877F2"}}/> <IoLogoLinkedin style={{color:"#0077B5"}}/> <FaYoutube style={{color:"#FF0000"}}/> </pre>
</div>

      </div>




</div>
</>
    );}

    export default Footer;