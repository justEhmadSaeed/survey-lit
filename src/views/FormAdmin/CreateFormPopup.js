import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { renameForm } from 'utils/form-data/form-admin';
import { renameValidationSchema } from 'utils/schemas/yup-schemas';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Loading from 'views/Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH_CREATE_FORM_ADMIN } from 'utils/constants/routing-paths.constant';

const CreateFormPopup = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	let { formId } = useParams();
	const user = useSelector((state) => state.auth);
	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			name: 'My Typeform'
		},
		validationSchema: renameValidationSchema,
		async onSubmit(values) {
			setLoading(true);
			await renameForm(user.id, formId, values.name);
			navigate(`${PATH_CREATE_FORM_ADMIN}/${formId}`);
		}
	});

	return loading ? (
		<Loading />
	) : (
		<div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-template-black">
			<div className="flex w-full justify-center mx-4">
				<div className="flex flex-col w-full rounded-lg relative max-w-md shadow-md bg-white">
					<h2 className="p-8 pb-4 text-xl font-light">
						Bring your new typeform to life
					</h2>
					<div className="px-8 pb-4">
						<p className="mb-1 text-sm">Give it a name</p>
						<div className="w-full">
							<div className="border text-template-black">
								<input
									type="text"
									name="name"
									className={`outline-offset-1 ${
										errors.name
											? 'outline-red-700'
											: ''
									} border-none px-3 py-1 text-sm w-full`}
									placeholder="My new typeform"
									value={values.name}
									onChange={handleChange}
								/>
							</div>
							{errors.name ? (
								<div className="mt-1">
									<span className="text-red-700 text-sm">
										{errors.name}
									</span>
								</div>
							) : null}
						</div>
					</div>
					<div className="p-8 pt-4 flex justify-end shrink-0">
						<button
							type="submit"
							onClick={handleSubmit}
							className="btn bg-template-black text-white"
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
CreateFormPopup.propTypes = {
	setIsMenuOpen: PropTypes.func,
	formId: PropTypes.string
};

CreateFormPopup.defaultProps = {
	setIsMenuOpen: undefined,
	formId: undefined
};

export default CreateFormPopup;
