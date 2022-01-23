import { ChevronDownIcon } from '@heroicons/react/solid';
import SignupSvg_1 from 'assets/signup_svg_1';
import SignupSvg_2 from 'assets/signup_svg_2';
import TypeformLogo from 'assets/typeform_logo';
import TextField from 'components/TextField';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	authChange,
	signInWithGoogle
} from 'services/firebase/firebase';
import { userLogged, userSignout } from 'store/auth/actions.auth';
import {
	TYPE_EMAIL,
	TYPE_PASSWORD
} from 'utils/constants/INPUT_TYPE.constant';
import {
	PATH_HOME,
	PATH_LOGIN
} from 'utils/constants/ROUTING_PATHS.constant';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	console.log(user);

	const dispatch = useDispatch();
	useEffect(() => {
		authChange((user) => {
			if (user) {
				dispatch(
					userLogged({
						name: user.displayName,
						id: user.uid,
						email: user.email
					})
				);
				navigate(PATH_HOME);
			} else {
				dispatch(userSignout());
			}
		});
	}, []);

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
				{/* Login Navigation */}
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
				<div className="relative overflow-y-auto w-full h-full mt-6">
					<div className="box-inherit">
						{/* Logo */}
						<div className="flex items-center justify-center mt-20 h-20">
							<Link to={PATH_HOME}>
								<TypeformLogo />
							</Link>
						</div>
						{/* Signup Module */}
						<div className="box-inherit">
							<main className="w-96 h-auto mx-auto mb-2">
								{/* Auth Content */}
								<div className="px-2">
									<div className="relative flex flex-col items-center">
										<div>
											<h2 className="text-left font-extralight text-xl text-template-signup-text mb-6">
												Get better data with
												conversational forms,
												surveys, quizzes &
												more.
											</h2>
											{/* Signup Fields */}
											<div>
												<TextField
													type={TYPE_EMAIL}
													placeholder="Email"
												/>
												<TextField
													type={
														TYPE_PASSWORD
													}
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="pb-6 flex flex-col items-center">
											<button
												// type={TYPE_SUBMIT}
												// value="Create my free account"
												className="w-56 h-10 bg-template-black text-white text-sm rounded cursor-pointer btn hover:opacity-90"
												onClick={
													signInWithGoogle
												}
											>
												Create my free account
											</button>
										</div>
										{/* Auth Container */}
										<div className="w-60">
											{/* Auth Divder */}
											<div className="bg-gray-500 h-1px text-center mb-6">
												<span className="relative px-4 text-sm text-gray-500 bg-white -top-[0.7rem]">
													OR
												</span>
											</div>
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
