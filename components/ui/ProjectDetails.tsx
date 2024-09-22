import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import {clsx} from "clsx";
import MagicButton from "@/components/ui/MagicButton";
import ProjectButton from "@/components/ui/ProjectButton";

export const ProjectDetails = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // className="w-full flex flex-col items-center justify-center",
                className
            )}
        >
            {children}
        </div>
    );
};

export const ProjectItems = ({
    id,
    title,
    subheader,
    des,
    img,
    iconLists,
    githubLink,
    deployedLink
}: {
    id: number;
    title: string;
    subheader: string;
    des: string;
    img: string;
    iconLists: string[];
    githubLink: string;
    deployedLink: string;
}) => {
    const position = id % 2 === 0 ? "right" : "left";

    return (
        <div
            className="mt-10 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
            <div
                className={clsx(
                    "absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-purple/20 blur-3xl filter",
                    position === "right" ? "lg:right-0" : "lg:left-0"
                )}
            />

            <div>
                <div className="flex space-x-2">
                    {iconLists && iconLists.map((icon, index) => (
                        <div key={index} className="w-fit rounded-2xl bg-black p-4 text-3xl">
                            <img src={icon} alt={`icon-${index}`} className="w-6 h-6"/>
                        </div>
                    ))}
                </div>

                <h1 className="mt-6 text-4xl font-bold">{title}</h1>
                <h2 className="mt-6 text-xl font-normal">{subheader}</h2>
                <h3 className="prose prose-invert mt-4 max-w-xl">{des}</h3>

                <div className="mt-8 flex flex-row space-x-10">
                    <ProjectButton
                        title="Live Site"
                        otherClasses="h-12 w-40"
                        gradientClasses="h-16 w-46"
                        buttonClasses="h-12 w-40 text-sm"
                    />
                    <ProjectButton
                        title="View Code"
                        otherClasses="h-12 w-40"
                        gradientClasses="h-16 w-46"
                        buttonClasses="h-12 w-40 text-sm"
                    />
                </div>
            </div>

            <Image
                src={img}
                alt="title"
                className={clsx(
                    "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 rounded-xl",
                    position === "right"
                        ? "lg:order-1 lg:translate-x-[15%]"
                        : "lg:-order-1 lg:translate-x-[-15%]"
                )}
                sizes="(max-width: 768px) 100vw, 50vw"
                layout="responsive"
                width={500}
                height={300}
            />
        </div>
    );
}