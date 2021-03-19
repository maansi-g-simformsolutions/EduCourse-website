import React from 'react';
import Header from './Header';
import Course from './Course';
import './Home.css';

const Home = () => {
  return(
    <>
      <Header />
      <h1 className='text-center display-5'>List of Courses</h1>
      <div className='cards'>
      
      <Course />
      <Course />
      <Course />
      <Course />
      </div>
    </>
  )
}

export default Home;