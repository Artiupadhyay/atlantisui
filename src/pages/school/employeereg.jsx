import React from 'react';
import {connect} from 'react-redux';
import SchoolNav from './components/schoolnav';
import {Form,Row,Col,Button} from 'react-bootstrap';
    

function EmployeeReg(props) {
  const [UserName, setUserName] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [Email, setEmail] = React.useState(null);
  

  const handelUserNameChange = (event)=>{
      setUserName(event.target.value);
  }
  const handelPasswordChange = (event)=>{
      setPassword(event.target.value);
  }
  const handelEmailChange = (event)=>{
    setEmail(event.target.value);
}
  

    return(
      <Container-Fluid>
      <SchoolNav/>
      <Row noGutters={true} className="justify-content-md-center">
      <Form.Group className="mt-5  ml-auto mr-auto">
      <Row className="mt-2"> 
      <Col xs={4}>
      UserName:</Col>
      <Col xs={6}><Form.Control type="text" placeholder="Username" />
      </Col></Row>
      <Row className="mt-2">
        <Col xs={4}>
      Password:</Col>
      <Col xs={6}>
      <Form.Control type="text" placeholder="Password" /></Col></Row>
      <Row className="mt-2">
        <Col xs={4}>
      Email:</Col>
      <Col xs={6}>
      <Form.Control type="text" placeholder="Email" /></Col></Row>
      <Row className="mt-2">
        <Col xs={4}>
      Role:</Col>
      <Col xs={6}>
      <Form.Control type="text" value="Student" /></Col></Row>
      <Row className="mt-2">
      <Form.File
      id="custom-file-translate-scss"
      label="Custom file input"
      lang="en"
      custom
    />
</Row>
<Row className="mt-2">
      <Button variant="primary">Submit</Button>{' '}</Row>
      </Form.Group>
</Row>
      </Container-Fluid> 
      
        
    );
}
export default EmployeeReg;
           