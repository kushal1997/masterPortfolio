import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import axios from "axios";

const Projects = (props) => {
  const { theme } = props;
  const [projects, setProjects] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/projects`); // Replace with your API endpoint
        setProjects(response.data);
        // console.log("response",response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects) console.log("projects", projects);
  }, [projects]);

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              {/* <img
                    src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
                    alt=""
                  /> */}
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects
          ?.sort((a, b) => new Date(b.developedAt) - new Date(a.developedAt))
          .map((repo) => (
            <GithubRepoCard key={repo._id} repo={repo} theme={theme} />
          ))}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Projects;
