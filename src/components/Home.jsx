import React from 'react'
import pdf from "../pdf/My Resume.pdf"
import hero from "../data/hero.json"
import { useEffect,useRef } from 'react';

import Typed from 'typed.js';
import { BiInfinite } from 'react-icons/bi';



const Home = () => {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to my profile","My name is Shailendra pratap singh","I am frontend webdeveloper."],
      typeSpeed: 50,
      backSpeed:50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="conatiner home" id='home'>
        <div className="left" data-aos="fade-up-right" data-aos-delay="1000">
            <h1 ref={el}></h1>
            <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-delay="1000">
         <div className="img">
         <img src={`/assets/${hero.imgSrc}`} alt="heroImage" />
         </div>
        </div>
      </div>
    </>
  )
}

export default Home
