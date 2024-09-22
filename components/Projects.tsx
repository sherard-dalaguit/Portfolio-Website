import React from 'react';
import {projects} from "@/data";
import {ProjectDetails, ProjectItems} from "@/components/ui/ProjectDetails";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

const Projects = () => {
    return (
        <>
            <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Personal Projects"
            />
            <section id="about">
                <ProjectDetails>
                    {projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink }) => (
                        <ProjectItems
                            id={id}
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
        </>
    );
};

export default Projects;
