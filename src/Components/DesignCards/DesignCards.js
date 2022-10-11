import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import one from '../../assets/images/1.jpg';
import two from '../../assets/images/2.jpg';
import three from '../../assets/images/3.jpg';
import four from '../../assets/images/4.jpg';
import five from '../../assets/images/5.jpg';
import six from '../../assets/images/6.jpg';
import './DesignCards.css'

export default function DesignCards() {
    
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


    return(
        <div className='designCards'>
            <div className='theDesignDiv'>
          <h1 className="designTitle">Proj<br/>ects</h1>
         
          
         
          <OwlCarousel className='theCarousal'{...options}>
              <div className='One'>
                <a href = "https://github.com/Apollovishwas/Deep-Q-Learning-Stock-Market-Prediction">
                  <img src={one} alt = 'no interet'/>
                  </a>
              </div>
              <div className='One'>
              <a href = "https://github.com/Apollovishwas/flask_pothole_detection_gbc">
                  <img src={two} alt = 'no interet'/>
                  </a>
              </div>
              <div className='One'>
              <a href = "https://github.com/Apollovishwas/Malaria-Detection">
                  <img src={three} alt = 'no interet'/>
                  </a>
              </div>

              <div className='One'>
              <a href = "https://github.com/Apollovishwas/TelecommChurnPrediction">
                  <img src={four} alt = 'no interet'/>
                  </a>
              </div>
              <div className='One'>
              <a href = "https://github.com/Apollovishwas/PickUp_Drop-Reinforcement-Learning">
                  <img src={five} alt = 'no interet'/>
                  </a>
              </div>
              <div className='One'>
              <a href = "https://github.com/Apollovishwas">
                  <img src={six} alt = 'no interet'/>
                  </a>
              </div>

</OwlCarousel>;
</div>
        </div>
    )
}