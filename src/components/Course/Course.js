import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Course.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup
} from 'reactstrap';

const Course = (props) => {

  const addhandle = () =>{
    toast.success('Successfully course added',
      {
        position: "bottom-right"}
    )};

    const deletehandle = () =>{
      toast.error('Course deleted',
        {
          position: "bottom-center"}
      )};
  
  return(
    <div>
      
      <CardGroup>
      <Card className='text-left course-card m-4' >
        <CardImg className='course-card-img m-auto' src={props.imgsrc} alt="Card image cap" />
        <CardBody className='card-body'>
          <CardTitle tag="h4">{props.course}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.cardContent}</CardText>
          <ToastContainer />
          <Button className='add-btn mr-3' onClick={addhandle}>Add Course</Button>
          <Button className='delete-btn' onClick={deletehandle}>Delete</Button>
        </CardBody>
      </Card>
      </CardGroup>
    </div>
  )
}

export default Course;