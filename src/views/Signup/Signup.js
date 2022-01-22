import SignupSvg_1 from 'assets/signup_svg_1';
import SignupSvg_2 from 'assets/signup_svg_2';
import React from 'react';
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
						className='absolute left-56 h-3/5 bottom-[20%]'
					/>
				</div>
			</div>
			{/* Right Sign up Module */}
			<div className="flex relative flex-col flex-auto basis-32"></div>
		</div>
	);
};

export default Signup;
