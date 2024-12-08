import React from "react";
import project from "../data/projects.json";


const Project = () => {
  return (
    <>
      <div className="container project my-3" id="project" >
        <h1>PROJECT</h1>
        <div className="row  d-flex align-item-center justify-content-center">
          {project.map((item) => {
            return (
              <div className="data col-lg-3 col-md-4 col-sm-6 mx-5 my-3 " data-aos="flip-left"  data-aos-delay="50">
                <div class="card bg-dark text-light " style={{ width: "18rem",
                  border:"1px solid yellow",
                  boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 10.5)"
                 }}>
                 <div className="img d-flex align-item-center justify-content-center my-3">
                 <img src={item.imageSrc} class="card-img-top" alt="..." style={{
                  width:"220px",
                  height:"220px",
                  border:"1px solid yellow",
                  boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 10.5)"
                 }} />
                 </div>
                  <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href={item.demo} class="btn btn-primary mx-2">
                      Demo
                    </a>
                    <a href={item.source} class="btn btn-warning">
                      Source
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
