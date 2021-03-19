import React from 'react';
import './Course.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup
} from 'reactstrap';

const Course = () => {
  return(
    <div>
      
      <CardGroup>
      <Card className='text-left html-css m-4' >
        <CardImg className='html-css-img m-auto' src="https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="Card image cap" />
        <CardBody className='card-bg'>
          <CardTitle tag="h4">HTML-CSS Course</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button className='btn mr-3'>Add Course</Button>
          <Button className='btn'>Delete</Button>
        </CardBody>
      </Card>
      </CardGroup>
    </div>
  )
}

export default Course;