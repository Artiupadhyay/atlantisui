import React from 'react';
import Navbar from './components/navbar';
import config from './../config';
import { Redirect } from 'react-router-dom';
import {Form,Row,Col,Button,Dropdown,InputGroup,FormControl,DropdownButton} from 'react-bootstrap';


function AddSchool(props) {
  const [redirect, setRedirect] = React.useState(false);
  const [userName, setuserName] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [email, setemail] = React.useState('');
  const [role, setrole] = React.useState('');
  const [image, setimage] = React.useState(null);
  const [status, setstatus] = React.useState(null);
  const [error, seterror] = React.useState(null);
  const [message, setMessage] = React.useState(null);


  const handeluserNameChange = (event)=>{
      setuserName(event.target.value);
  }
  const handelpasswordChange = (event)=>{
      setpassword(event.target.value);
  }
   
  const handelEmailChange = (event)=>{
      setemail(event.target.value);
  }

  const handelSelect =(event)=>{
    setrole(event.target.value);
  }

  const handelimageChange = (event)=>{
    setimage(event.target.files[0]);
  }
  const addSchool = () =>{
    let formData =  new FormData();
    formData.append('name',userName);
    formData.append('email',email);
    formData.append('role',role);
    formData.append('image', image, image.name);
    formData.append('password',password);

    fetch(config.baseurl+'auth/register/',{
      headers:{
        'auth':localStorage.getItem('token'),
      },
      method:'put',
      body:formData
    })
    .then(res=>{
      setstatus(res.status);
      return res.json();
    }).then(data=>{
      if(status == 201){
        seterror(null);
        setMessage(role+" register successful!")
      }
      else{
        setMessage(null);
        seterror(data.message || data.email[0]);
      }
    })
    .catch(err=> console.log("Error"+err));

  }

  if(localStorage.getItem('role')!='Admin' && !redirect){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('role');
    setRedirect(true);
  }
    

    return(
      <Container-Fluid>
      <Navbar/>
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
     
      <InputGroup>
    <FormControl
      placeholder="Role"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#">Admin</Dropdown.Item>
      <Dropdown.Item href="#">Employee</Dropdown.Item>
      <Dropdown.Item href="#">Teacher</Dropdown.Item>
      <Dropdown.Item href="#">Student</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
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
export default AddSchool;