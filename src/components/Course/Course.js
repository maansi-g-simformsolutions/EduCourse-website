import React from 'react';
import './Course.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup
} from 'reactstrap';

const Course = (props) => {
  return(
    <div>
      
      <CardGroup>
      <Card className='text-left html-css m-4' >
        <CardImg className='html-css-img m-auto' src={props.imgsrc} alt="Card image cap" />
        <CardBody className='card-bg'>
          <CardTitle tag="h4">{props.course}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.cardContent}</CardText>
          <Button className='btn mr-3'>Add Course</Button>
          <Button className='btn'>Delete</Button>
        </CardBody>
      </Card>
      </CardGroup>
    </div>
  )
}

export default Course;