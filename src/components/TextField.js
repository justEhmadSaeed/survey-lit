import React from 'react';

const TextField = ({ type, placeholder }) => {
	return (
		<div className="h-auto mb-4 break-words">
			<input
				placeholder={placeholder}
				type={type}
				autoComplete="off"
				className="h-full w-full px-2 py-3 border rounded border-gray-400 text-xs tracking-wider"
			/>
		</div>
	);
};

export default TextField;
