import React, { useState } from 'react';
import Course from './Course';

const AllCourses = () => {

  const [courses, setCourses] = useState(
    [
      {
        title: 'html-css course',
        description: 'This is demo course'
      },
      {
        title: 'html-css course',
        description: 'This is demo course'
      },
      {
        title: 'html-css course',
        description: 'This is demo course'
      },
    ]
  );

  return(
    <div>
    <h1>All Courses</h1>
    <p>List of courses are as follows: </p>
    
    {courses.length>0? courses.map((item) =>
      <Course courses={item} />
    ): "No courses "}
    </div>
  )
};

export default AllCourses;