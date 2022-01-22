import React from 'react';
import TypeformLogo from 'assets/typeform_logo';
import { ChevronDownIcon } from '@heroicons/react/solid';
import NavItem from 'components/Navigation/NavItem';
import { Link } from 'react-router-dom';
import {
	PATH_LOGIN,
	PATH_SIGNUP
} from 'utils/constants/ROUTING_PATHS.constant';
const PublicNavbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6">
			<div className="py-1 w-32">
				<TypeformLogo />
			</div>
			<ul className="hidden lg:flex flex-1 justify-center items-center gap-5 text-template-black text-s">
				<NavItem
					text="Solutions"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
				/>
				<NavItem
					text="Templates"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
				/>
				<NavItem
					text="Integration"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
				/>
				<NavItem
					text="Resources"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
				/>
				<NavItem text="Pricing" link="/" />
				<NavItem text="Enterprise" link="/" />
			</ul>
			<div className="hidden lg:flex gap-3">
				<button className=" btn px-4 py-2 rounded border-2 text-template-black border-template-black hover:opacity-80">
					<Link to={PATH_LOGIN}>Log in</Link>
				</button>
				<button className="btn px-4 py-2 rounded bg-template-black text-white hover:opacity-80">
					<Link to={PATH_SIGNUP}>Sign up</Link>
				</button>
			</div>
		</nav>
	);
};

export default PublicNavbar;
