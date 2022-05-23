import React, { useState } from 'react';
import { renameForm } from 'utils/form-data/form-data';
import { renameValidationSchema } from 'utils/schemas/yup-schemas';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Loading from 'views/Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import PATH from 'utils/constants/routing-paths.constant';

const CreateFormPopup = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	let { formId } = useParams();
	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			name: 'My Lit Survey'
		},
		validationSchema: renameValidationSchema,
		async onSubmit(values) {
			setLoading(true);
			await renameForm(formId, values.name);
			navigate(`${PATH.CREATE_FORM_ADMIN}/${formId}`);
		}
	});

	return loading ? (
		<Loading />
	) : (
		<div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-template-dark-green">
			<div className="flex w-full justify-center mx-4">
				<div className="flex flex-col w-full rounded-lg relative max-w-md shadow-md bg-white dark:bg-template-very-dark-green">
					<h2 className="p-8 pb-4 text-xl font-light dark:text-template-light-grey">
						Bring your new Lit Survey to life
					</h2>
					<div className="px-8 pb-4">
						<p className="mb-1 text-sm dark:text-template-light-grey">
							Give it a name
						</p>
						<div className="w-full">
							<div className=" text-template-black">
								<input
									type="text"
									name="name"
									className={`outline-none ${
										errors.name
											? 'border-red-700 border dark:border-red-300'
											: ''
									} px-3 py-3 text-sm w-full dark:bg-template-dark-green dark:text-template-light-grey active:shadow-sm`}
									placeholder="My new Lit Survey"
									value={values.name}
									onChange={handleChange}
									autoComplete="off"
								/>
							</div>
							{errors.name ? (
								<div className="mt-1">
									<span className="text-red-700 text-sm dark:text-red-300">
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
							className="btn bg-template-very-dark-green dark:bg-template-dark-green text-white "
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
