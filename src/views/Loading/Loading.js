import React from 'react';
import surveyit_logo from 'assets/logo.png';
import darkLogo from 'assets/logo-dark.png';

const Loading = () => {
	return (
		<div className="dark:bg-template-dark-green w-full h-screen flex justify-center items-center">
			<img
				className="dark:hidden"
				src={surveyit_logo}
				alt="Logo"
			/>
			<img
				className="hidden dark:visible"
				src={surveyit_logo}
				alt="Logo"
			/>
		</div>
	);
};

export default Loading;
