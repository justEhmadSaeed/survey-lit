import React, { useState } from 'react';
import typeform_logo from 'assets/typeform_logo.svg';
import user_icon from 'assets/user_icon.png';
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@heroicons/react/solid';

const DashboardNavbar = () => {
	const user = useSelector((state) => state.auth);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const hideMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="flex justify-between items-center p-2 border-b relative">
			<header className="">
				<div className="p-2">
					<img
						className="h-4"
						src={typeform_logo}
						alt="Logo"
					/>
				</div>
			</header>
			<footer className="flex items-center">
				<button className="bg-template-green text-sm text-white py-2 px-2 mx-2 rounded">
					View Plans
				</button>
				<div className="">
					<button
						className="cursor-pointer flex items-center"
						onClick={toggleMenu}
					>
						{/* Circle Icon */}
						<div className="relative">
							<img
								src={user_icon}
								alt={`${user.name} Icon`}
								className="h-8 w-8"
							/>
							<span className="absolute top-1 left-3 text-white font-semibold">
								{user.name[0]}
							</span>
						</div>
						{/* Name */}
						<div className="text-sm pl-2">
							{user.name.split(' ')[0]}
						</div>
						<div className="h-5 w-5 text-template-auth-text">
							<ChevronDownIcon />
						</div>
					</button>
				</div>
			</footer>
			{/* Menu */}
			<section
				className={`${
					isMenuOpen ? 'block' : 'hidden'
				} absolute right-3 top-12`}
			>
				<div className="shadow-md w-64 rounded-lg text-template-black py-2">
					<header className="border-b pb-2 mb-2">
						<div className="flex items-center px-4 gap-3">
							{/* Circle Icon */}
							<div className="relative">
								<img
									src={user_icon}
									alt={`${user.name} Icon`}
									className="h-8 w-8"
								/>
								<span className="absolute top-1 left-3 text-white font-semibold">
									{user.name[0]}
								</span>
							</div>
							{/* Name */}
							<div className="flex flex-col items-start text-sm">
								<span>{user.name.split(' ')[0]}</span>
								<span>Settings</span>
							</div>
						</div>
					</header>
				</div>
			</section>
		</nav>
	);
};

export default DashboardNavbar;
