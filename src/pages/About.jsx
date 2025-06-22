import '../css/about.css';
import { IoMdMail } from "react-icons/io";


function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">More about me</h1>
      <div className="about-me">
        <p className="about-intro">I enjoy creating cool stuff and figuring things, I love learning, improving bit by bit, and turning ideas into real things. No pressure, just passion.</p>
      </div>
      <h1 className="about-heading">Skills</h1>
      <div className="about-skills-header">
        <h4>COMFORTABLE WITH</h4>
        <h4></h4>
      </div>

      <div className="about-icons">
        <div class="about-comfortable">
          <i class="devicon-html5-plain my-icon"></i>
          <i class="devicon-css3-plain my-icon"></i>
          <i class="devicon-javascript-plain my-icon"></i>
          <i class="devicon-php-plain my-icon"></i>
          <i class="devicon-bootstrap-plain my-icon"></i>
          <i class="devicon-mysql-plain-wordmark my-icon"></i>
          <i class="devicon-sqlite-plain-wordmark my-icon"></i>
          <i class="devicon-tailwindcss-original my-icon"></i>
          <i class="devicon-react-original my-icon"></i>
          <i class="devicon-laravel-original my-icon"></i>
          <i class="devicon-github-original my-icon"></i>
          <i class="devicon-firebase-plain my-icon"></i>
          <i class="devicon-figma-plain my-icon"></i>
          <i class="devicon-filezilla-plain my-icon"></i>
          <i class="devicon-vim-plain my-icon"></i>
          <i class="devicon-linux-plain my-icon"></i>
        </div>
      
        <div class="about-learning">

        </div>  
      </div>
      <h1 className="about-heading">Contacts</h1>
      <div className="about-email-container">
        <p className="about-email-title" aria-label="email"><IoMdMail /></p>
        <a className="about-email" href="mailto:gary@garykw.com">gary@garykw.com</a>
    </div>

       
    </div>

  );
}

export default About;