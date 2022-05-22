import React from 'react';
import surveyit_logo from 'assets/logo.png';

const Loading = () => {
	return (
		<div className="dark:bg-template-signup-text w-full h-screen flex justify-center items-center">
			<img className="h-8" src={surveyit_logo} alt="Logo" />
		</div>
	);
};

export default Loading;
