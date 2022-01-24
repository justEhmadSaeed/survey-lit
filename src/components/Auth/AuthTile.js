import React from 'react';
import PropTypes from 'prop-types';

const AuthTile = ({ imgSrc, title, onClick }) => {
	return (
		<button
			className="flex justify-start items-center w-full border px-3 py-2 border-template-auth-border text-template-auth-text text-sm rounded mt-4 overflow-hidden text-left"
			onClick={onClick}
		>
			<img className="h-6" src={imgSrc} alt="" />
			<div className="ml-6">{title}</div>
		</button>
	);
};

AuthTile.propTypes = {
	imgSrc: PropTypes.string,
	title: PropTypes.string,
	onClick: PropTypes.func
};

AuthTile.defaultProps = {
	imgSrc: '',
	title: '',
	onClick: undefined
};

export default AuthTile;
