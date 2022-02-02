import { ChevronDownIcon, GlobeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthNavbar = ({ title, path, helperText }) => {
	return (
		<div className="flex items-center justify-between px-6 py-2">
			<span className="flex items-center p-2 border-0 cursor-pointer text-sm">
				<GlobeIcon className="h-6 w-6" />
				English
				<ChevronDownIcon className="h-4 w-4" />
			</span>
			<span className="ml-auto pr-2 text-sm">{helperText}</span>
			<Link
				to={path}
				className="text-xs px-2 py-1 border text-template-black border-template-black hover:opacity-80"
			>
				{title}
			</Link>
		</div>
	);
};

AuthNavbar.propTypes = {
	title: PropTypes.string,
	helperText: PropTypes.string,
	path: PropTypes.string
};

AuthNavbar.defaultProps = {
	helperText: '',
	title: '',
	path: '/'
};
export default AuthNavbar;
