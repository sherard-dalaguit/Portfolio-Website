import React from 'react';

interface ProjectButtonProps {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
    gradientClasses?: string;
    buttonClasses?: string;
}

const ProjectButton = ({ title, icon, position, handleClick, otherClasses, gradientClasses, buttonClasses }: ProjectButtonProps) => {
    return (
        <div>
            <button className={`relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`} onClick={handleClick}>
                <span className={`absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D3D3D3_0%,#A9A9A9_50%,#D3D3D3_100%)] ${gradientClasses}`} />
                <span className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${buttonClasses}`}>
                    {position === 'left' && icon}
                    {title}
                    {position === 'right' && icon}
                </span>
            </button>
        </div>
    );
};

export default ProjectButton;