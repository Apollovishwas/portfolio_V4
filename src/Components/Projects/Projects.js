import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './Projects.css'


export default function Projects(){
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: false,
        autoplay: true,
        smartSpeed: 700,
   
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };



    return (
        <div className='ProjectsContainer'>
<div className='theProjectDiv'>
       
<h2 className="ProjectTitle ">OTHERS</h2>
          
         
        <div className='projectList'>
            <ul>
               <a href='https://youtu.be/L5aGDvLe0aw'> <li>Ticker- iOS App</li></a>
               <a href='https://www.microcollege.online'> <li>Microcollege.online - Fullstack Website</li></a>
               <a href='https://youtu.be/h6nH9hjgV1A'> <li>Automation Bot - UiPath</li></a>

            </ul>
            <ul>
            <a href='#'> <li>SuperMom- iOS App</li></a>
               <a href='https://www.internplus.in'> <li>Internplus.in - Fullstack Website</li></a>
               <a href='https://bit.ly/apollovishwas'> <li>Portfolio</li></a>

            </ul>
            <ul>
            <a href='https://www.slvgroup.online'> <li>Freelance Project - WebSite</li></a>
               <a href='https://youtu.be/pTsFCG7oQ7w'> <li>Expedite First-In-Human Trials - Machine Learning Project</li></a>
               <a href='https://github.com/Apollovishwas'> <li>Check out my Github for more</li></a>


            </ul>
        </div>


        <div className='contact-login-buttons'>
            <div className='contactMe-Div'>
              <a href = "mailto:someone@yoursite.com">
<FaMailBulk/>
</a>
            </div>

            <div className='contactMe-Div'>
<a href = "https://github.com/Apollovishwas">
              <FaGithubSquare/>
</a>
            </div>

            <div className='contactMe-Div'>
    <a href ="https://in.linkedin.com/in/vishwas-chandran">
                <FaLinkedin/>
            </a>
            </div>
            
        </div>

</div>
        </div>
    )
}