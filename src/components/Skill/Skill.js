import React from "react";
import "./skill.css";
import Button from "../Button/Button";

function Skill() {
  const skills = [
    { id: 1, detail: "HTML" },
    { id: 2, detail: "CSS" },
    { id: 3, detail: "JAVASCRIPT" },
  ];
  return (
    <div className="skills">
      <div className="skill-title">
        <h2>Skills</h2>
      </div>
      <div className="skill-details">
        {skills.map((skill) => (
          <Button data={skill.detail} key={skill.id} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
