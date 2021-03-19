import React from "react";
import { Jumbotron, Button } from "reactstrap";
import '../styles.css';

const Header = () => {
  return (
    <div>
      <Jumbotron className="text-center header">
        <h1 className="display-3">Learn with Maansi !</h1>
        <p className="lead">
          This is Maansi here and you are on a journey to discover my
          walkthroughs along the various courses I learnt ...
        </p>
        <Button color="primary" className='btn'>Learn More</Button>
      </Jumbotron>
    </div>
  );
};

export default Header;
