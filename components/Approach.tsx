"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
	return (
		<section id="roadmap" className="w-full py-20">
			<h1 className="font-bold text-center text-[72px] md:text-5xl lg:text-6xl">
				My <span className="text-purple">Roadmap</span>
			</h1>
			<div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
				<Card
					title="Foundational Learning"
					icon={<AceternityIcon label="Foundation" />}
					description="Leveraging my double major in Computer Science and Pure Mathematics at UC Irvine to build a strong foundation in problem-solving and analytical thinking."
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName="bg-black"
						colors={[[128, 0, 128]]}
					/>
				</Card>
				<Card
					title="Next.js Web Development"
					icon={<AceternityIcon label="Development" />}
					description="Applying modern web development principles with Next.js to create dynamic, responsive, and user-centric web applications."
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName="bg-black"
						colors={[
							[236, 72, 153],
							[232, 121, 249],
						]}
						dotSize={2}
					/>
				</Card>
				<Card
					title="Continuous Learning & Advanced Studies"
					icon={<AceternityIcon label="Advanced Studies" />}
					description="Dedicated to expanding my skill set through ongoing education and hands-on projects in emerging technologies, with plans to pursue a Master's Degree in Artificial Intelligence and Machine Learning."
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName="bg-black"
						colors={[[255, 0, 125]]}
					/>
				</Card>
			</div>
		</section>
	);
}

export default Approach

const Card = ({
	title,
	icon,
	children,
	description
			  }: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
	description?: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl h-[30rem] relative"
		>
			<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
					{title}
				</h2>
				<h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: '#e4ecff'}}>
					{description}
				</h2>
			</div>
		</div>
	);
};

const AceternityIcon = ({label}: { label: string }) => {
	return (
		<div>
			<button
				className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				<span
					className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
				<span
					className="text-2xl font-bold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl">
				{label}
			    </span>
			</button>
		</div>
	);
};

export const Icon = ({className, ...rest}: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
		</svg>
	);
};
