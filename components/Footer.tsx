import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-70"
				/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[75vw]">
					Interested in <span className="text-purple">networking</span> or <span className="text-purple">collaborating</span> on tech projects?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">Feel free to reach out! I'm eager to network and explore opportunities to grow together.</p>
				<a href="mailto:sherard.softwaredev@gmail.com">
					<MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
				</a>
			</div>

			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Sherard</p>

				<div className="flex items-center justify-center md:gap-3 gap-6 sm:mt-5 xs:mt-5">
					{socialMedia.map((profile) => (
						<a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer">
							<div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
								<img src={profile.img} alt={profile.img} width={20} height={20}/>
							</div>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
