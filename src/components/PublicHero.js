import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_SIGNUP } from 'utils/constants/ROUTING_PATHS.constant';
import lg_screen_video from 'assets/homepage-videos/typeform-video-lg.mp4';
import md_screen_video from 'assets/homepage-videos/typeform-video-md.mp4';
import sm_screen_video from 'assets/homepage-videos/typeform-video-sm.mp4';

const PublicHero = () => {
	return (
		<section className="relative text-center xl:text-left">
			<div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full">
				{/* Content */}
				<div className="p-12 xl:p-10 text-template-black flex flex-col xl:flex-row justify-end flex-1 ">
					<div className="flex flex-col items-center xl:items-start">
						<h1 className="my-4 lg:my-6 font-light text-4xl md:text-5xl lg:text-6xl md:max-w-sm lg:max-w-lg tracking-wide xl:tracking-tight leading-tight">
							There&apos;s a better way to ask
						</h1>
						<p className="max-w-md md:text-2xl text-xl text-template-black leading-8 font-light mb-5 lg:mb-10">
							You don&apos;t want to make a boring form.
							And your audience won&apos;t answer one.
							Create a typeform instead—and make
							everyone happy.
						</p>
						<div className="flex justify-center flex-wrap gap-6 mb-6">
							<Link to={PATH_SIGNUP}>
								<div className="btn px-6 py-3 bg-template-black text-white hover:opacity-80">
									Get started - it&apos;s free
								</div>
							</Link>
						</div>
						<div className="">
							<ul className="opacity-70 flex xl:block gap-5">
								<li className="flex">
									<div className="mr-2">✓</div>
									<div>No credit card required</div>
								</li>
								<li className="flex">
									<div className="mr-2">✓</div>
									<div>
										No time limit on Free plan
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex-1 hidden xl:block"></div>
				{/* Typeform Video */}
				<div className="w-full h-auto absolute top-0 md:-top-72 lg:-top-24 xl:-top-40 left-0 right-0 bottom-0 -z-10">
					<video
						autoPlay
						muted
						loop
						playsInline
						alt="lg:screen video"
						className="w-full hidden xl:block"
					>
						<source
							src={lg_screen_video}
							type="video/mp4"
						/>
						<track
							// src="captions_en.vtt"
							kind="captions"
							srcLang="en"
							label="english_captions"
						/>
					</video>
					<video
						autoPlay
						muted
						loop
						playsInline
						alt="md:screen video"
						className="w-full hidden lg:block xl:hidden"
					>
						<source
							src={md_screen_video}
							type="video/mp4"
						/>
						<track
							// src="captions_en.vtt"
							kind="captions"
							srcLang="en"
							label="english_captions"
						/>
					</video>
					<video
						autoPlay
						muted
						loop
						playsInline
						alt="sm:screen video"
						className="w-full md:block lg:hidden"
					>
						<source
							src={sm_screen_video}
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
			</div>
			{/* Features */}
			{/* <div>
				<ul className="opacity-70 flex justify-center xl:hidden">
					<li className="flex">
						<div className="mr-2">✓</div>
						<div>No credit card required</div>
					</li>
					<li className="flex">
						<div className="mr-2">✓</div>
						<div>No time limit on Free plan</div>
					</li>
				</ul>
			</div> */}
		</section>
	);
};

export default PublicHero;
