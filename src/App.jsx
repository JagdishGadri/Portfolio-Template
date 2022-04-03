import { useSelector } from "react-redux";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import EducationList from "./components/EducationList/EducationList";
import ExperienceList from "./components/ExperienceList/ExperienceList";
import ProjectList from "./components/ProjectList/ProjectList";
import Toggle from "./components/Toggle/Toggle";
import Skill from "./components/Skill/Skill";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const App = () => {
  const darkMode = useSelector((state)=>state.darkMode);
  
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <EducationList />
      <Skill></Skill>
      <ExperienceList />
      <GetInTouch></GetInTouch>
      <ProjectList></ProjectList>
      <Contact />
    </div>
  );
};

export default App;
