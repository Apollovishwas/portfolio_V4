import React , {Suspense} from 'react';
import './MainContainer.css';
import TheBigSphere from '../TheBigSphere/TheBigSphere';
import Typical from "react-typical";
import TopBar from '../TopBar/TopBar'
import DesignCards from '../DesignCards/DesignCards';
import Languages from '../Languages/Languages';
import Projects from '../Projects/Projects';
import { BsMouseFill } from "react-icons/bs";
import 'animate.css';
export default function MainContainer() {
    return (
      <div className="theMain">
        <TopBar/>
        <div className="sphereContainer">
       <div className="titles">

       <h1 className='myName'>Vishwas</h1>
          <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    
                    "Machine Learning Engineer",
                    1500,
                    "Data Scientist",
                    1500,
                    "Data Analyst",
                    1500,
                  ]}
                />
              </h2>
            </div>
            
          <TheBigSphere />
          
         <BsMouseFill className="theMouse animate__animated animate__pulse animate__infinite"/>
        </div>
        <DesignCards/>
       <Languages/>
       <Projects/>
      </div>
    );
}





