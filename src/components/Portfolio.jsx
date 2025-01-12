import React from 'react';
import "../App.css";
import "./Portfolio.css"
import diziTEchCorner from '../assets/dizitechcorner.png';
import fleverly from '../assets/Fleverly.png';
import SagarProtfolio from '../assets/sagarportfolio.png';
import Shubhinvite from '../assets/shubhinvite.png';
import EmailTool from '../assets/emailtool.svg';

const projects = [
  {
    name: 'Flevorly',
    description:
      'I crafted the front page for Flevorly, a snack brand, with a video background behind the hero section and navigation. Created with HTML and CSS, it aims to captivate visitors with a visually engaging design.',
    image: fleverly,
    previewLink: 'https://darkblue-coyote-263865.hostingersite.com/',
    technologies: ['HTML', 'CSS'],
  },
  {
    name: 'Dizitech Corner',
    description:
      'This is the front page of my educational site, Dizi Tech Corner. Designed using HTML, CSS, and JavaScript, it showcases an interactive and engaging layout, currently featuring the home page only.',
    image: diziTEchCorner,
    previewLink: 'https://darkorchid-weasel-939631.hostingersite.com/',
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'My Portfolio Website',
    description:
      'sagarpanchariya.online is a modern portfolio website built with React, showcasing professional projects and skills. It features a responsive design, smooth animations, and an intuitive user interface for seamless navigation.',
    image: SagarProtfolio,
    previewLink: 'https://sagarpanchariya.online/',
    technologies: ['React', 'HTML', 'JS', 'BS'],
  },
  {
    name: 'Shubhinvite.in',
    description:
      'Shubhinvite.in is a platform designed to simplify event planning and invitations. It offers customizable templates, event management tools, and seamless social media integration.',
    image: Shubhinvite,
    previewLink: 'https://shubhinvite.in/',
    technologies: ['HTML', 'CSS', 'JS', 'PHP'],
  },
  {
      name: 'MultipleEmail Sending Tool',
      description: 'Multiple Email Sending Tool is a Node.js application designed to streamline bulk email campaigns. It offers Excel integration for email lists, secure Gmail SMTP delivery, and customizable HTML templates with built-in rate limiting.',
      image: EmailTool, // Replace with the actual image or file name for the tool
      previewLink: 'https://github.com/sagarpanchariyasp/emailSendingTool', // Provide the link to preview the tool or demo
      technologies: ['Node.js', 'Nodemailer', 'XLSX', ], // Add the relevant technologies used
    },
];

const Portfolio = () => {
  return (
    <section id="my-portfolio">
      <div className="pt-3 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto" style={{ width: '100%' }}>
            <h2
              className="fw-light"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 300, color: '#333333' }}
            >
              My Portfolio
            </h2>
            <p
              className="lead text-body-secondary"
              style={{ color: '#333333', fontWeight: 400 }}
            >
              Explore some of my recent projects that highlight my skills and creativity. From stunning website designs
              to functional applications, each project reflects my dedication to delivering high-quality results.
            </p>
          </div>
        </div>
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card-img-top"
                    width="100%"
                    height="225"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '0' }}>{project.name}</h3>
                    <p className="card-text" style={{ marginTop: '1rem' }}>
                      {project.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href={project.previewLink} target="_blank" rel="noopener noreferrer">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Preview
                          </button>
                        </a>
                      </div>
                      <div>
                        {project.technologies.map((tech, techIndex) => (
                          <strong key={techIndex} style={{ marginRight: '0.5rem' }}>
                            {tech}
                          </strong>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
