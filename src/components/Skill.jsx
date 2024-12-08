import React from "react";
import skills from "../data/skills.json";






const Skill = () => {
  return (
    <>
      <div className="container skill" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((item) => {
            return (
              <>
                <div className="item" key={item.id} data-aos="flip-right"  data-aos-delay="50">
                  <img src={`/assets/${item.imageSrc}`} alt="" />
                  <h3>{item.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
