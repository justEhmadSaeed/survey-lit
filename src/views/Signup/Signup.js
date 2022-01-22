import { ChevronDownIcon } from '@heroicons/react/solid';
import SignupSvg_1 from 'assets/signup_svg_1';
import SignupSvg_2 from 'assets/signup_svg_2';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_LOGIN } from 'utils/constants/ROUTING_PATHS.constant';
// import second from '';

const Signup = () => {
	return (
		<div className="bg-template-black flex overflow-hidden">
			{/* Left Image Part */}
			<div className="relative hidden h-screen lg:block flex-1 px-4 py-8">
				<div className="h-full">
					<SignupSvg_1 />
					<SignupSvg_2 />
					<img
						src="https://public-assets.typeform.com/bouncer/bouncer.037ef56b8203e10d37902ff7fb06fd55.png"
						alt="signup"
						className="absolute right-0 h-3/5 bottom-[20%]"
					/>
				</div>
			</div>
			{/* Right Sign up Module */}
			<div className="flex relative flex-col flex-1 basis-1/3 w-full h-full max-h-full bg-white text-template-signup-text">
				{/* Login Link */}
				<div className="flex items-center justify-between px-6 py-2">
					<span className="flex items-center p-2 border-0 cursor-pointer text-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
								clipRule="evenodd"
							/>
						</svg>
						English
						<ChevronDownIcon className="h-4 w-4" />
					</span>
					<span className="ml-auto pr-2 text-sm">
						Already have an account?
					</span>
					<Link
						to={PATH_LOGIN}
						className="text-xs px-2 py-1 border text-template-black border-template-black hover:opacity-80"
					>
						Log in
					</Link>
				</div>
				{/* Content Container */}
				<div className="relative overflow-y-auto w-full h-full mt-6"></div>
			</div>
		</div>
	);
};

export default Signup;
