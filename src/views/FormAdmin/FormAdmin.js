import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CreateFormPopup from './CreateFormPopup';
import PropTypes from 'prop-types';
import AdminNavbar from 'components/Navigation/AdminNavbar';
import UserMenu from 'components/UserMenu';
import { PATH_DASHBOARD } from 'utils/constants/routing-paths.constant';
import FormBody from './FormBody';
import { getFormName } from 'utils/form-admin/form-admin';
import { useSelector } from 'react-redux';

const FormAdmin = ({ create }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(create);
	let { formId } = useParams();
	const [formName, setFormName] = useState('My Typeform');
	const user = useSelector((state) => state.auth);

	useEffect(() => {
		const getName = async () => {
			let name = await getFormName(user.id, formId);
			if (name) setFormName(name);
		};
		getName();
	}, []);

	return isMenuOpen ? (
		// Popup card container
		<CreateFormPopup
			setIsMenuOpen={setIsMenuOpen}
			formId={formId}
		/>
	) : (
		<div>
			<AdminNavbar>
				<header>
					<div>
						<Link
							to={PATH_DASHBOARD}
							className="text-sm text-template-auth-text ml-4 mr-3 hover:text-template-signup-text"
						>
							My Workspace
						</Link>
						/
						<input
							value={formName}
							className="ml-3"
							placeholder="Default form title"
							disabled
						/>
					</div>
				</header>
				<footer className="flex justify-center items-center">
					<div className="pr-2 border-r">
						<button className="btn bg-template-black text-white">
							Publish
						</button>
					</div>
					<UserMenu />
				</footer>
			</AdminNavbar>
			<FormBody />
		</div>
	);
};
FormAdmin.propTypes = {
	create: PropTypes.bool
};

FormAdmin.defaultProps = {
	create: false
};

export default FormAdmin;
