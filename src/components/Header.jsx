import React from "react";
import "../App.css";


function Header() {
    return (
<section id="header">
    <nav class="navbar navbar-expand-lg  rounded" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10"
          aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item" >
              <a  class="nav-link active menu " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active menu" aria-current="page" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active menu" aria-current="page" href="#my-portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active menu" aria-current="page" href="#contact">Contact</a>
            </li>
            <li class="nav-item"> 
              <a class="nav-link active menu" aria-current="page" href="https://drive.google.com/file/d/1NvKRqw3Ze7NuMd-4XWDxuIyuxHBVnGcc/view?usp=sharing" target="_blank">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active menu" aria-current="page" href="https://dizitechcorner.com/" target="__blanck">Blogs</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </section> 
    );
}

export default Header;