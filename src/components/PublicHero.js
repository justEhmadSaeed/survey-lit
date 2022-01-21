import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_SIGNUP } from 'utils/constants/ROUTING_PATHS.constant';

const PublicHero = () => {
	return (
		<section className="relative flex flex-col lg:flex-row gap-12 mt-12 lg:mt-20 w-full text-center xl:text-left">
			{/* Content */}
			<div className="container text-template-black flex flex-1 flex-col items-center xl:items-start">
				<h1 className="my-4 lg:my-6 font-light text-6xl md:max-w-sm lg:max-w-lg tracking-tight leading-tight">
					There&apos;s a better way to ask
				</h1>
				<p className="max-w-md lg:text-xl text-2xl text-template-black leading-8 font-light mb-5 lg:mb-10">
					You don&apos;t want to make a boring form. And
					your audience won&apos;t answer one. Create a
					typeform instead—and make everyone happy.
				</p>
				<div className="flex justify-center flex-wrap gap-6">
					<Link to={PATH_SIGNUP}>
						<div className="btn px-6 py-3 bg-template-black text-white hover:opacity-80">
							Get started - it&apos;s free
						</div>
					</Link>
				</div>
			</div>
			{/* Typeform Video */}
			<div className="absolute -top-56 left-0 right-0 bottom-0 -z-10">
				<video
					autoPlay
					muted
					loop
					playsInline
					alt=""
					className=" h-auto"
				>
					<source
						src="/assets/typeform-video-lg.mp4"
						type="video/mp4"
					/>
					<track
						// src="captions_en.vtt"
						kind="captions"
						srcLang="en"
						label="english_captions"
					/>
				</video>
			</div>
		</section>
	);
};

export default PublicHero;
