import AuthNavbar from 'components/AuthNavbar';
import React from 'react';
import { authObj, loginConfigUI } from 'services/firebase/firebase';
import PATH from 'utils/constants/routing-paths.constant';
import surveyit_logo from 'assets/logo.png';
import { Link } from 'react-router-dom';
import { StyledFirebaseAuth } from 'react-firebaseui';

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
									</div>
									<StyledFirebaseAuth
										uiConfig={loginConfigUI}
										firebaseAuth={authObj}
									/>
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
