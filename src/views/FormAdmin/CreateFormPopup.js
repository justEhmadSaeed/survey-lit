import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { renameForm } from 'utils/form-admin/form-admin';
import PropTypes from 'prop-types';

const CreateFormPopup = ({ setIsMenuOpen, formId }) => {
	const [title, setTitle] = useState('My Typeform');
	const user = useSelector((state) => state.auth);

	const onChangeHandler = (e) => {
		setTitle(e.target.value);
	};

	const onClickContinue = async () => {
		await renameForm(user.id, formId, title);
		setIsMenuOpen(false);
	};

	return (
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
									className="outline-none border-none px-3 py-1 text-sm w-full"
									placeholder="My new typeform"
									value={title}
									onChange={onChangeHandler}
								/>
							</div>
							{/* <div className="mt-1">
                        <span className="text-red-700 text-sm">
                            Ack!
                        </span>
                    </div> */}
						</div>
					</div>
					<div className="p-8 pt-4 flex justify-end shrink-0">
						<button
							onClick={onClickContinue}
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
