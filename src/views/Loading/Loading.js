import React from 'react';
import typeform_logo from 'assets/typeform_logo.svg';

const Loading = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<img className="h-8" src={typeform_logo} alt="Logo" />
		</div>
	);
};

export default Loading;
