import Card from 'react-bootstrap/Card';

import Img1 from './img1.jpg';
import Button from 'react-bootstrap/Button';
import textstyle from './image.css';

function ImgOverlayExample() {
    return (
        <>
      <Card className="bg-dark text-white   " style ={{ border: 0 ,border: 'none',opacity:0.7}} >
        <Card.Img src= {Img1} alt="Card image"  />
        <Card.ImgOverlay>
<div className='textstyle'>
          <Card.Title className='font-weight-bold'let style ={{ fontSize: '200%',}}>Master Your Tasks Effortlessly</Card.Title>
          <Card.Text>
          Streamline your workflow and boost productivity with our intuitive task management tool
          </Card.Text>
          <Card.Text> <Button variant="success">Get Started For Free</Button>{' '}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>

      </>
    );
  }
  
  export default ImgOverlayExample;
  