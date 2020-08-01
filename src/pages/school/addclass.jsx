import React from 'react';
import {Redirect} from 'react-router-dom';
import {Form,Row,Col,Button} from 'react-bootstrap';
import SchoolNav from './components/schoolnav';
import config from './../config';

function AddClass(props){
  const [className, setClassName] = React.useState('');
  const [section, setSection ] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  
  const [message, setMessage] = React.useState(null);

  const handleClass =(event)=>{
    setClassName(event.target.value);
  }

  const handleSection =(event)=>{
    setSection(event.target.value);
  }


  var status = null;

  var options = {
            headers:{'Content-Type': 'application/json',
            'auth':localStorage.getItem('token'),  
          },
            method:'post',
            body:JSON.stringify({classname:className, section:section})
        }

  const handleSubmit = ()=>{
    fetch(config.baseurl +'school/class',options)
    .then(res =>{
      status = res.status;
      return res.json()
    })
    .then(data=>{
      if(status === 200 || status === 201){
        setMessage("Class added")
      }
      else{
        setMessage(data.message || data.classname[0] || data.section[0] ||"Something went wrong please try again");
      }
    }).catch(err=>{
      console.log(err);
      if(status === 200 || status === 201){
        setMessage("Class Added")
      }
      else{
        setMessage(err)
      }
     
    })
  }

  if(localStorage.getItem('role')!=='School' && !redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    setRedirect(true);
  }
    return(
      <>
      {redirect?<Redirect to = '/' />:null}
      <Container-Fluid>
        <SchoolNav/>
        <Row noGutters={true} className="justify-content-md-center">
          {message & status != 201?<div className="position-absolute alert alert-danger" role="alert">{message}</div> :(message ? <div className=" position-absolute alert alert-primary" role="alert">{message}</div>:null)}
          <Form.Group className="mt-5">
          <Row className="mt-2"> 
          <Col md="auto" xs={4}>
          ClassName:</Col>
          <Col xs={6}><Form.Control type="text" placeholder="Class Name" onChange={handleClass} />
          </Col></Row>
          <Row className="mt-2">
            <Col xs={4}>
          Section:</Col>
          <Col xs={6}>
          <Form.Control type="text" placeholder="Class Section" onChange={handleSection}/></Col></Row>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Form.Group>
        </Row>
        </Container-Fluid> 
        </>
    );
  }
export default AddClass;