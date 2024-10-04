
import { IoArrowBackCircle } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';
function BasicExample(props) {
  return (
<>
<div className="row" style={{ display:'flex',justifyContent:"space-evenly" ,flexFlow:"wrap row", marginRight:'10%', marginLeft:'10%'}}>
     
<div className="col-md">
        <div className="card" style={{borderColor:"white"}}>
        <div className="m-5" style={{width:"30%"}}>
          <img src={Img2} className="card-img-top" style={{}} alt="..."></img></div>
          <h5 className=" card-title fs-4">Task Scheduler</h5>
          <div className="card-body">
            <small style={{color:"gray"}} >Productivity</small>
            <p className="card-text fs-5">Effortlessly organize and prioritize your daily tasks with our intuitive scheduler.</p>
          
            
           <Button variant="none" style={{}}> <IoArrowBackCircle style={{borderRadius:'50% / 50%', marginTop:"1rem"  , color:"#90EE90",fontSize:"50" }} /></Button>
  </div>
        </div>
        </div>
        <div className="col">
        <div className="card" style={{borderColor:"white"}}>
        <div className="m-5" style={{width:"30%"}}>
          <img src={Img3} className="card-img-top" style={{}} alt="..."></img></div>
          <h5 className=" card-title fs-4">Collaboration Hub</h5>
          <div className="card-body">
            <small style={{color:"gray"}} >Teamwork</small>
            <p className="card-text fs-5">Enhance team collaboration with shared task lists and real-time updates.</p>
          
            
           <Button variant="none" style={{}}> <IoArrowBackCircle style={{borderRadius:'50% / 50%' , marginTop:"1rem" , color:"#90EE90",fontSize:"50" }} /></Button>
  </div>
        </div>
        </div>

        <div className="col">
        <div className="card" style={{borderColor:"white", maxWidth:"300px"}}>
          <div className="m-5" style={{width:"30%"}}>
          <img src={Img4} className="card-img-top" style={{}} alt="..."></img></div>
          <h5 className=" card-title fs-4">Progress Tracker</h5>
          <div className="card-body">
            <small style={{color:"gray"}} >Analytics</small>
            <p className="card-text fs-5">Track your progress with detailed analytics and performance insights. </p>
          
            
           <Button variant="none" style={{}}> <IoArrowBackCircle style={{borderRadius:'50% / 50%', marginTop:"1rem"  , color:"#90EE90",fontSize:"50" }} /></Button>
  </div>
        </div>
        </div>
        </div>
    </>




  );
         }

export default BasicExample;



