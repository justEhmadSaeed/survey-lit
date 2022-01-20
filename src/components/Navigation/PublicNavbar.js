import React from 'react';
import TypeformLogo from 'assets/TypeformLogo';
import { ChevronDownIcon } from '@heroicons/react/solid';
import NavItem from 'components/Navigation/NavItem';
const PublicNavbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6">
			<div className="py-1 w-32">
				<TypeformLogo />
			</div>
			<ul className="hidden sm:flex flex-1 justify-center items-center gap-5 text-template-black text-s">
				<NavItem
					text="Solutions"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
					link="/"
				/>
				<NavItem
					text="Templates"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
					link="/"
				/>
				<NavItem
					text="Integration"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
					link="/"
				/>
				<NavItem
					text="Resources"
					Icon={<ChevronDownIcon className="h-4 w-4" />}
					link="/"
				/>
				<NavItem text="Pricing" link="/" />
				<NavItem text="Enterprise" link="/" />
				<NavItem text="Careers" link="/" />
			</ul>
			<div className="flex gap-3">
				<button className="px-4 py-2 rounded border-2 text-template-black bg-white border-template-black">
					Log in
				</button>
				<button className="px-4 py-2 rounded bg-template-black text-white ">
					Sign up
				</button>
			</div>
		</nav>
	);
};

export default PublicNavbar;
