import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PATH_HOME } from 'utils/constants/routing-paths.constant';

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

NavItem.propTypes = {
	text: PropTypes.string,
	Icon: PropTypes.element,
	link: PropTypes.string
};

NavItem.defaultProps = {
	text: '',
	Icon: undefined,
	link: PATH_HOME
};
export default NavItem;
