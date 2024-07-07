import React from 'react'
import  Banner from "../components/Banner";
import Tutorial from '../components/Tutorial';
import Courses from '../components/courses';
import Form from "../components/Form";
function Home() {
  return (
    <div>
        <Banner text="The Hub Of Tutorials" />
      <Tutorial/>
      <Courses/>
      <Form/>
    </div>
  )
}

export default Home
