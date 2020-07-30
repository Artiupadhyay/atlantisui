import React from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import SchoolNav from './components/schoolnav';

function AddClass(props){
    return(
      <Container-Fluid>
        <SchoolNav/>
        <Row noGutters={true} className="justify-content-md-center">
        <Form.Group className="mt-5">
        <Row className="mt-2"> 
        <Col md="auto" xs={4}>
        ClassName:</Col>
        <Col xs={6}><Form.Control type="text" placeholder="" />
        </Col></Row>
        <Row className="mt-2">
          <Col xs={4}>
        Section:</Col>
        <Col xs={6}>
        <Form.Control type="text" placeholder="" /></Col></Row>
        <Button variant="primary">Submit</Button>{' '}
        </Form.Group>
  </Row>
        </Container-Fluid> 
        
    );
  }
export default AddClass;