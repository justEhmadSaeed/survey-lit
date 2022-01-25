import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_TEXT } from 'utils/constants/input-types.constant';

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

TextField.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string
};

TextField.defaultProps = {
	type: TYPE_TEXT,
	placeholder: ''
};
export default TextField;
