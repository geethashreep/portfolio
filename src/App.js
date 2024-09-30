import Geetha from './Geetha.jpg';
import './App.css';
import './editing.css';
import sastra from './sastra.png';
import resume from './resume.png';
import quizapp from './quizapp.png';
import logo from './logo.svg';













const skills=[
  {name:"Frontend/Design", level:90},
  {name:"Backend", level:60},
  {name:"DataStructures", level:70},
  {name:"Problem Solving", level:65}
]
const languages = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JAVASCRIPT" },
  { name: "TYPESCRIPT" },
  { name: "C" },
  { name: "C++" },
  { name: "JAVA" },
  { name: "PYTHON" },
  { name: "MYSQL" },
  { name: "MONGODB" }
];
const repeatedLanguages = [].concat(languages, languages, languages, languages,languages,languages,languages);
const frameworks=[
  {name:"REACTJS"},
  {name:"NODEJS"},
  {name:"EXPRESSJS"},
  {name:"LINUX"},
  {name:"DATASTRUCTURES"},
  {name:"WEBDEV"},
  {name:"GENAI"},
  {name:"GITHUB"}
];
const repeatedframeworks = [].concat(frameworks, frameworks ,frameworks, frameworks,frameworks,frameworks,frameworks);

function App() {
  return (
    <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>



    <div class="complete">
      <img id="Geetha" src={Geetha} alt="Geetha"/>
      <div id ="container">
      <div><h1 id="Title">ABOUT</h1></div>
      <div><h2 id="intro">Hi ! I'm Geetha Shree</h2>
      <div>
      <p id="intropara">I'm an UnderGrad student from SASTRA university, TamilNadu, pursuing Btech in ComputerScience.
        I thrive on challenges and am always seeking opportunities to innovate and create impactful solutions.
      I enjoy building sites and applications that look creative and work effictive. Here are some areas I am passionate about:
      </p>
      <ul id="intersted">
        <li>
          Frontend Development</li>
          <li>FullStack Development</li>
          <li>Machine Learning</li>
          <li>UI/UX designing</li></ul></div>
          <div class="border">
          <a href="/126157038 Geethasri.pdf" class="resume-icon">MORE ON MY RESUME</a></div>
    <div class="social">
      <a href="https://github.com/geethashreep" class="icon"><i class="fab fa-github"/></a>
      <a href="mailto:geethashreep@gmail.com" class ="eicon"><i class="fas fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/geetha-shree-1b534732a/" class="linked-icon"><i class="fab fa-linkedin-in"/></a>
      </div>
      </div>
    </div>
    </div>
    <div>

    <p id="languages">SKILLS</p>
    <div className="languagebar">
        {repeatedLanguages.map((language, index) => (
          <div key={index} className="language">
            <p>{language.name}</p>
          </div>
        ))}
      </div>
    </div>
<div>
    <div className="frameworksbar">
        {repeatedframeworks.map((framework, index) => (
          <div key={index} className="framework">
            <p>{framework.name}</p>
          </div>
        ))}
      </div>
    </div>


    <div>
  
<p id="proficiency">PROFICIENCY</p>
<div className="skillbar">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <p>{skill.name}</p>
            <div className="bar">
              <div className="fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>


    


    <div>
    
      <p id="education">EDUCATION</p>
      <div class="edu">
      <img id="sastra" src={sastra} alt="sastra"/>
      <div class="edu_details">
      <h1>SASTRA UNIVERSITY</h1>
      <p class="details">Bachelor of Technology in Computer Science and Engineering</p>
    <p class="details">2022-2026</p>
     <p class="details">GPA:8.2/10</p>
     </div>
    </div>
    </div>

<div>
  <p id="project">PROJECTS</p>
<div id="projects">
  <div class="poject1">
   <img id="resumerevamp" src={resume} alt="resume"/>
   <h1>Resume Revamp</h1>
   <p>An AI-based full stack web application to revamp resumes to improve alignment with job descriptions, utilizing React Js
and Python, powered by ChatGPT.</p>
  </div>
  <div class="project2">
   <img id="quizapp" src={quizapp} alt="quizpp"/>
   <h1>Quiz APP</h1>
   <p>An online Quiz Application platform that allows students to attempt quizzes created by their faculty, featuring auto
evaluation, scorecard viewer, online discussion, and previous quiz analysis.</p>
  </div>
</div>
</div>

<p id="experience">EXPERIENCE</p>
<div id="exp">
  <div class="quanteon">
   <img id="logo" src={logo} alt="logo"/>
   <h6>Softwre Developer Intern</h6>
   <p>May 2022 - July 2022</p>
   <p>Worked as frontend engineer in Flowscript.ai project, a No-Code web development platform enabling app-building
through plain English.</p>
  </div>
</div>

<div id="contactfull">
<div>
  <p id="contact">CONTACT</p>
  <p id="contact-details">If you’re interested in my work or Looking to collaborate? I’m all ears—my inbox is open!"</p>
  <h1 id="phone">9290705434</h1>
  <p id="email">geethashreepgs@gmail.com</p>
</div>
</div>

 
<footer>Designed by: GeethaShree Pallapothu </footer>
</body>
  );
}

export default App;
