import signupSvg_1 from 'assets/signup_vector_1.svg';
import signupSvg_2 from 'assets/signup_vector_2.svg';
import surveyit_logo from 'assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { authObj, signupConfigUI } from 'services/firebase/firebase';
import PATH from 'utils/constants/routing-paths.constant';
import AuthNavbar from 'components/AuthNavbar';
import { StyledFirebaseAuth } from 'react-firebaseui';

const Signup = () => {
	return (
		<div className="bg-template-black flex overflow-hidden">
			{/* Left Image Part */}
			<div className="relative hidden h-screen lg:block flex-1 px-4 py-8">
				<div className="h-full">
					<img
						src={signupSvg_1}
						alt="signup svg"
						className="-bottom-[10%] -left-[2%] w-full absolute"
					/>
					<img
						src={signupSvg_2}
						alt="signup svg"
						className="h-150% -bottom-40 left-28 absolute"
					/>
					<img
						src="https://public-assets.typeform.com/bouncer/bouncer.037ef56b8203e10d37902ff7fb06fd55.png"
						alt="signup"
						className="absolute right-0 h-3/5 bottom-[20%]"
					/>
				</div>
			</div>
			{/* Right Sign up Module */}
			<div className="flex relative flex-col flex-1 basis-1/3 w-full h-screen max-h-full bg-white text-template-signup-text">
				{/* Navigation */}
				<AuthNavbar
					helperText="Already have an account?"
					path={PATH.LOGIN}
					title="Log in"
				/>
				{/* Content Container */}
				<div className="relative overflow-y-auto w-full h-full mt-6">
					<div className="box-inherit">
						{/* Logo */}
						<div className="flex items-center justify-center mt-20 h-20">
							<Link
								to={PATH.HOME}
								className="flex items-center w-1/4"
							>
								<img
									src={surveyit_logo}
									alt="Logo"
									className=""
								/>
							</Link>
						</div>
						{/* Signup Module */}
						<div className="box-inherit">
							<main className="w-96 h-auto mx-auto mb-2">
								{/* Auth Content */}
								<div className="px-2 py-5">
									<div className="relative flex flex-col items-center">
										<h2 className="text-left font-extralight text-xl text-template-signup-text mb-6">
											Get better data with
											conversational forms,
											surveys, quizzes & more.
										</h2>
										<div className="w-full pb-6 flex flex-col items-center">
											<StyledFirebaseAuth
												className="w-full"
												uiConfig={
													signupConfigUI
												}
												firebaseAuth={authObj}
											/>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
