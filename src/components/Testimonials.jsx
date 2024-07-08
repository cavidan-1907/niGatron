
import React from 'react'
import "../assets/css/test.css"
import "../assets/css/reset.css"
import Coment from './coment'
import { BiSolidStarHalf, BiStar } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import Niga from "../assets/file.jpeg"
const Testimonials = () => {
  return (
    <div>
        <div className="section5">
            <div className="container section51">
            <div className="testTop">    <span>Testimonials</span>
            <h2  className="link">Student Reviews</h2></div>
            </div>
            <div className="comments-container">
          <Coment
            name="Excellent Teacher!"
            icon1={<BiStar />}
            icon2={<BiStar />}
            icon3={<BiStar />}
            icon4={<BiStar />}
            icon5={<BiStar />}
            pText='"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
            img={Niga}
            nam="Niga Əlizamin"
            work="Niga"
          />
           <Coment
            name="Excellent Teacher!"
            icon1={<BsFillStarFill />}
            icon2={<BsFillStarFill />}
            icon3={<BsFillStarFill />}
            icon4={<BsFillStarFill />}
            icon5={<BiSolidStarHalf />}
            pText='"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
            img="https://preview.colorlib.com/theme/tutor/images/person_1.jpg"
            nam="Mike Fisher"
            work="Owner, Ford"
          />
           <Coment
            name="Excellent Teacher!"
            icon1={<BiStar />}
            icon2={<BiStar />}
            icon3={<BiStar />}
            icon4={<BiStar />}
            icon5={<BiStar />}
            pText='"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
            img="https://preview.colorlib.com/theme/tutor/images/person_1.jpg"
            nam="Mike Fisher"
            work="Owner, Ford"
          />
            </div>
        </div>
     
    </div>
  )
}

export default Testimonials
