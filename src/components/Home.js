import React from 'react';
import {Jumbotron, Container, Button} from 'reactstrap';

const Home = () => {
  return(
    <div>
      <Jumbotron className='text-center'>
        <h1 className='display-3'>Learn with Maansi</h1>
        <p>This is Maansi Gupta and you are on
           a journey to learn React with me.</p>
        <Container>
          <Button color='primary'>Start Using</Button>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home;