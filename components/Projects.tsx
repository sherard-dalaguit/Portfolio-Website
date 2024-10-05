import React from 'react';
import {projects} from "@/data";
import {ProjectDetails, ProjectItems} from "@/components/ui/ProjectDetails";

const Projects = () => {
    return (
        <div id="projects" className="mt-10">
            <h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
                My <span className="text-purple">Personal Projects</span>
            </h1>
            <section>
                <ProjectDetails>
                    {projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink, delayed }) => (
                        <ProjectItems
                            id={id}
                            key={id}
                            title={title}
                            subheader={subheader}
                            des={des}
                            img={img}
                            iconLists={iconLists}
                            githubLink={githubLink}
                            deployedLink={deployedLink}
                            delayed={delayed}
                        />
                    ))}
                </ProjectDetails>
            </section>
        </div>
    );
};

export default Projects;
