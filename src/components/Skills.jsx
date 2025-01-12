import React from 'react';
import "../App.css";
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import html5 from '../assets/html-5.png';
import css3 from '../assets/css-3.png';
import sass from '../assets/sass.png';
import bootstrap from '../assets/bootstrap.png';
import javascript from '../assets/javascript.png';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import wordpress from '../assets/wordpress.png';
import elementor from '../assets/elementor.png';
import canva from '../assets/canva.webp';
import react from '../assets/react.svg';

const Skills = () => {
  const skills = [
    { name: 'HTML', image: html5 },
    { name: 'CSS', image: css3 },
    { name: 'SASS', image: sass },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'JavaScript', image: javascript },
    { name: 'React', image: react },
    { name: 'Git', image: git },
    { name: 'GitHub', image: github },
    { name: 'WordPress', image: wordpress },
    { name: 'Elementor', image: elementor },
    { name: 'Canva', image: canva },
  ];

  // Settings for the react-slick carousel
  const settings = {
    slidesToShow: 9,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="skills">
      <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 300, color: '#333333' }}>
        My Skills
      </h2>
      <Slider {...settings} className="skills-carousel">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
