import React from 'react';
import Course from '../Course/Course';
import AllCoursesData from './AllCoursesData';
import './AllCourses.css';

const AllCourses = () => {
  return(
    <div>
      <h1 className='text-center display-5'>List of Courses</h1>
      <div className='cards'>
      {AllCoursesData.map((values) => {
        return <Course 
        imgsrc= {values.imgsrc}
        course= {values.course}
        subtitle= {values.subtitle}
        cardContent=  {values.cardContent} />;
        })}
      </div>
    </div>
  )
}

export default AllCourses;