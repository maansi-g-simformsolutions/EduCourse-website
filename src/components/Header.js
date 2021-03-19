import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className="display-3">Learn with Maansi !</h1>
        <p className="lead">This is Maansi here and you are on a journey to discover my walkthroughs along the various courses I learnt ...</p>
        <Button color="primary">Learn More</Button>
      </Jumbotron>
    </div>
  );
};

export default Header;