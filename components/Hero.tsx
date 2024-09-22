import React from 'react';
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#ffffff" />
                <Spotlight className="top-10 left-full h-[80vh] w-[40w]" fill="#433f4a" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#7a49d1" />
            </div>

            <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.075] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100">
                        Innovative Web Development & Future AI Enthusiast
                    </h2>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Next.js Developer Today, AI Engineer Tomorrow"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Sherard, a Computer Science and Pure Mathematics student at UC Irvine.
                    </p>

                    <a href="/#about">
                        <MagicButton title="Show my work" icon={<FaLocationArrow/>} position="right"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
