import AuthDivider from 'components/AuthDivider';
import AuthNavbar from 'components/AuthNavbar';
import AuthTile from 'components/AuthTile';
import React from 'react';
import { signInWithGoogle } from 'services/firebase/firebase';
import {
	TYPE_EMAIL,
	TYPE_PASSWORD
} from 'utils/constants/input-types.constant';
import PATH from 'utils/constants/routing-paths.constant';
import surveyit_logo from 'assets/logo.png';
import google_icon from 'assets/google_icon.svg';
import microsoft_icon from 'assets/microsoft_icon.svg';
import TextField from 'components/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="flex relative flex-col flex-1 basis-1/3 w-full h-screen max-h-full bg-template-light-grey text-template-signup-text">
			{/* Navigation */}
			<AuthNavbar
				helperText="Don't have an account yet?"
				path={PATH.SIGNUP}
				title="Sign up"
			/>
			{/* Content Container */}
			<div className="relative overflow-y-auto  w-full h-full flex justify-center items-center">
				<div className="box-inherit bg-white h-fit shadow-lg rounded-lg">
					{/* Logo */}
					<div className="flex items-center justify-center h-20 w-full">
						<Link
							to={PATH.HOME}
							className="flex items-center w-1/2 mt-8"
						>
							<img
								className=""
								src={surveyit_logo}
								alt="Logo"
							/>
						</Link>
					</div>
					{/* Login Module */}
					<div className="box-inherit">
						<main className="w-96 h-auto mx-auto mb-2">
							{/* Auth Content */}
							<div className="px-16 pb-5">
								<div className="relative flex flex-col items-center">
									<div className="w-full">
										<h2 className="text-center text-lg text-template-signup-text mb-6">
											Hello, who&apos;s this?
										</h2>
										{/* Login Fields */}
										<div>
											<p>Email</p>
											<TextField
												type={TYPE_EMAIL}
												placeholder="bruce@wayne.com"
											/>
											<p>Password</p>
											<TextField
												type={TYPE_PASSWORD}
												placeholder="At least 8 characters"
											/>
										</div>
										<Link
											to={PATH.HOME}
											className="text-sm text-template-auth-text underline mb-4"
										>
											Forgot Password?
										</Link>
										<button
											className="my-6 w-full h-10 bg-template-maroon text-white text-sm rounded cursor-pointer btn hover:opacity-90"
											onClick={signInWithGoogle}
										>
											Log in to Lit Survey
										</button>
									</div>
									{/* <div className=" flex flex-col items-center"></div> */}
									{/* Auth Container */}
									<div className="w-full">
										{/* Auth Divder */}
										<AuthDivider />
										{/* Auth Modules */}
										<div className="flex flex-col justify-center">
											<AuthTile
												title="Sign in with Google"
												imgSrc={google_icon}
												onClick={
													signInWithGoogle
												}
											/>
											<AuthTile
												title="Sign in with Microsoft"
												imgSrc={
													microsoft_icon
												}
												onClick={
													signInWithGoogle
												}
											/>
											<div className="flex justify-center text-xs text-template-auth-text my-5 ">
												<button
													onClick={
														signInWithGoogle
													}
													className="underline"
												>
													Sign In with SSO
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
