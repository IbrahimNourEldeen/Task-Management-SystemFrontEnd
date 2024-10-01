import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiMail } from "react-icons/ci";
function ButtonsExample() {
  return (
    <>
     

      <InputGroup className="mb-3">
      
        <Form.Control
          placeholder= "your email"
         
          
        />
       
        <Button variant="success" id="button-addon2">
          subscribe
        </Button>
      </InputGroup >

     

    
    </>
  );
}

export default ButtonsExample;