import React from 'react';
import {projects} from "@/data";
import {ProjectDetails, ProjectItems} from "@/components/ui/ProjectDetails";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="font-bold text-center text-purple text-[72px] md:text-5xl lg:text-6xl">Personal Projects</h1>
            <section>
                <ProjectDetails>
                    {projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink }) => (
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
                        />
                    ))}
                </ProjectDetails>
            </section>
        </div>
    );
};

export default Projects;
