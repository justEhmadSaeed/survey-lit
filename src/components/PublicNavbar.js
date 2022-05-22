import React, { useState } from 'react';
import surveyit_logo from 'assets/logo.png';
import {
	ChevronDownIcon,
	MenuIcon,
	XIcon
} from '@heroicons/react/solid';
import NavItem from 'components/NavItem';
import { Link } from 'react-router-dom';
import PATH from 'utils/constants/routing-paths.constant';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import { signoutWithGoogle } from 'services/firebase/firebase';

const PublicNavbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const userId = useSelector((state) => state.auth.id);
	return (
		<nav className="">
			{/* For large screens */}
			<header className="flex items-center bg-white lg:bg-transparent justify-between flex-wrap p-6">
				<div className="py-1 w-32">
					<img src={surveyit_logo} alt="Logo" />
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
				{userId ? (
					<div className="hidden lg:block">
						<UserMenu />
					</div>
				) : (
					<div className="hidden lg:flex gap-3">
						<button className=" btn px-4 py-2 rounded border-2 text-template-black border-template-black hover:opacity-80">
							<Link to={PATH.LOGIN}>Log in</Link>
						</button>
						<button className="btn px-4 py-2 rounded bg-template-black text-white hover:opacity-80">
							<Link to={PATH.SIGNUP}>Sign up</Link>
						</button>
					</div>
				)}
			</header>
			{/* For tablet and mobile view */}
			<section
				className={`left-0 top-0 fixed flex flex-col justify-between w-screen ${
					showMenu ? 'h-full' : 'h-0'
				} transition-all ease-in-out duration-500 bg-template-menu-background z-10`}
			>
				<header className="lg:hidden w-full h-20 flex justify-end">
					<button
						className="btn flex justify-center items-center w-20 h-20"
						onClick={() => setShowMenu(!showMenu)}
					>
						{showMenu ? (
							<XIcon className="h-10 w-10 text-white overflow-hidden" />
						) : (
							<MenuIcon className="text-template-black h-10 w-10" />
						)}
					</button>
				</header>
				<section className="overflow-y-scroll"></section>
				<footer
					className={`${
						showMenu ? 'flex' : 'hidden'
					} justify-center items-center h-24 bg-black transition-all ease-in-out duration-500`}
				>
					{userId ? (
						<button
							onClick={signoutWithGoogle}
							className="btn px-4 py-2 mr-2 rounded border-2 text-white border-white hover:opacity-80"
						>
							Log Out
						</button>
					) : (
						<div>
							<button className="btn px-4 py-2 mr-2 rounded border-2 text-white border-white hover:opacity-80">
								<Link to={PATH.LOGIN}>Log in</Link>
							</button>
							<button className="btn px-4 py-2 ml-2 rounded bg-white text-template-black hover:opacity-80">
								<Link to={PATH.SIGNUP}>Sign up</Link>
							</button>
						</div>
					)}
				</footer>
			</section>
		</nav>
	);
};

export default PublicNavbar;
