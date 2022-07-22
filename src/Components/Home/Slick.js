import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import bl from '../../Assets/business over 80+/banglalink_NO8OzVA_Wh3DWzZ.png'
import apex from '../../Assets/business over 80+/apex.png'
import gp from '../../Assets/business over 80+/gstar.png'
import doctime from '../../Assets/business over 80+/DOCTIME_iczCYUq.png'
import basis from '../../Assets/business over 80+/BASIS_g04lEPh.png'
import bim from '../../Assets/business over 80+/BIP_tj823QP.png'
import impecthub from '../../Assets/business over 80+/impecthub.png'
import bkas from '../../Assets/business over 80+/p3.png'
import boel from '../../Assets/business over 80+/p2.png'
import PULSE_Health_care_ZZoHDUF from '../../Assets/business over 80+/PULSE_Health_care_ZZoHDUF.png'

export default class MultipleItems extends Component {
  render() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "Black" ,color:"white" }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", color:"white", background: "black" }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className='pb-8 mt-10 items-center w-4/5 justify-center mx-auto'>
       
        <Slider {...settings}>
          <div>
            <img src={bl} alt="" />
          </div>
          <div className=''>
          <img src={basis} alt="" />
          </div>
          <div>
          <img src={gp} alt="" />
          </div>
          <div>
          <img src={apex} alt="" />
          </div>
          <div>
          <img src={doctime} alt="" />
          </div>
          <div>
          <img src={bim} alt="" />
          </div>
          <div>
          <img src={impecthub} alt="" />
          </div>
          <div>
          <img src={bkas} alt="" />
          </div>
          <div>
          <img src={boel} alt="" />
          </div>
          <div>
          <img src={PULSE_Health_care_ZZoHDUF} alt="" />
          </div>
         
        </Slider>
      </div>
    );
  }
}