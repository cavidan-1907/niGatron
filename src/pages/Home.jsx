import React from 'react'
import  Banner from "../components/Banner";
import Tutorial from '../components/Tutorial';
import Courses from '../components/courses';
import Form from "../components/Form";
import Testimonials from "../components/Testimonials"
function Home() {
  return (
    <div>
        <Banner text="The Hub Of Tutorials" />
      <Tutorial/>
      <Courses/>
      <Form/>
      <Testimonials/>
    </div>
  )
}

export default Home
