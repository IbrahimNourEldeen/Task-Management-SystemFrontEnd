
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImgOverlayExample from '../Components/image';
import BasicExample from '../Components/features';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/footer';
const Home = () => {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user.data)
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    console.log(user)
  }, [user, navigate]);

  return (
    <>
    <div>
      < ImgOverlayExample />
      <br></br>
      <h1 className='mb-5' style={{fontSize:'6vw',marginLeft:'35%'}}>Features</h1>
      <div className='m-5' style={{ display:'flex',justifyContent:"space-evenly" ,flexFlow:"wrap row"}}>
      <BasicExample /> 
      </div> 
    <div className="  col d-flex justify-content-center m-5"  >
    <Button className='btn btn-success  ' >Explore features</Button>
    </div>
    </div>
    <div style={{textAlign:"center", alignItems:"center", justifyContent:"center", width:"100%",  backgroundColor:"azure", }}>
    <h1 style={{fontSize:"" ,color:"green"}}>stay warm in style</h1>
<p  className ="m-3" style={{display:"blok"}}> Streamline your workflow and boost productivity with our intuitive task management tool</p>
<p>Streamline your workflow</p>
<Button className ="m-5"  variant="success">Get Started For Free</Button>
</div>
    
<Footer />
</>
  )}

export default Home