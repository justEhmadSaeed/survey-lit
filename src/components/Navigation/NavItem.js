import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ text, Icon, link }) => {
	return (
		<li className="flex items-center cursor-pointer">
			<Link
				to={link}
				className="mt-4 lg:inline-block lg:mt-0 hover:opacity-80 "
			>
				{text}
			</Link>
			{Icon}
		</li>
	);
};

export default NavItem;
