import './App.css';
import logo from './girl.png'
import linkedin from './group11.png'
import github from './group8.png'
import instagram from './group7.png'

function App() {
  

  return (
    <div id="div1">
      <span className="nav">  Sandra Rosa Antony</span>
      <div className="main">
        <img src={logo} alt="Logo" className="girl" />
        <div className="content">
          <span className="heading">
            Hi, I am Sandra, a Full-stack developer...
          </span>
          <span className="paragraph">
            I am a student web developer. I am currently improving my skills in web development in MERN stack.And I am truly an enthusiastic...
          </span>
          <div className="App">
          <a href="https://drive.google.com/file/d/1ZVWnZSqE0Lqq2ElqA41kIstYxPJgTygO/view?usp=share_link" target="_blank" rel="noreferrer">
          <button className="resume">Download Resume</button>
        </a>

          </div>
        </div>
        <div className="images">

          <img src={linkedin} alt="linkedin" className="group11 icon" onClick={()=> window.open("https://www.linkedin.com/in/sandra-rosa-antony-66a964220/", "_blank")} />
          <img src={instagram} alt="instagram" className="group7 icon" onClick={()=> window.open("https://www.instagram.com/__zet_wounded_beast/", "_blank")}/>
          <img src={github} alt="github" className="group8 icon" onClick={()=> window.open("https://github.com/Sandra-Rosa", "_blank")}/>
        </div>
      </div>
    </div>
  );
}
export default App;
