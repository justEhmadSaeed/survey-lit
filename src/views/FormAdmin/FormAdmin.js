import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateFormPopup from './CreateFormPopup';
import PropTypes from 'prop-types';

const FormAdmin = ({ create }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(create);
	let { formId } = useParams();

	return isMenuOpen ? (
		// Popup card container
		<CreateFormPopup
			setIsMenuOpen={setIsMenuOpen}
			formId={formId}
		/>
	) : (
		<div></div>
	);
};
FormAdmin.propTypes = {
	create: PropTypes.bool
};

FormAdmin.defaultProps = {
	create: false
};

export default FormAdmin;
