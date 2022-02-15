import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';
import CopyToClipboard from 'react-copy-to-clipboard';

// This component is responsible for publishing and displaying the form URL
const PublishButton = ({ formURL, onClick }) => {
	const [attributes, setAttributes] = useState({
		loading: false,
		success: false
	});
	return (
		<div className="pr-2 border-r relative">
			<button
				onClick={async () => {
					setAttributes({ ...attributes, loading: true });
					await onClick();
					setAttributes({ loading: false, success: true });
				}}
				disabled={attributes.loading}
				className={`btn ${
					attributes.loading
						? 'bg-template-auth-border'
						: 'bg-template-black'
				} text-white`}
			>
				{attributes.loading ? 'Publishing...' : 'Publish'}
			</button>
			{/* URL Card */}
			{attributes.success && (
				<div className="z-20 absolute">
					<div className="p-4 bg-white dark:bg-template-auth-text shadow mt-3 max-w-xs rounded-lg">
						<div className="flex justify-between">
							<span className="text-template-black dark:text-white text-sm font-semibold">
								Get the link
							</span>
							<button
								onClick={() =>
									setAttributes({
										...attributes,
										success: false
									})
								}
							>
								<XIcon className="h-4 w-4 text-template-auth-text dark:text-white" />
							</button>
						</div>
						<div className="flex flex-nowrap mt-3">
							<input
								value={formURL}
								className="flex-1 rounded border px-2 py-1 text-sm overflow-auto dark:text-template-signup-text"
								readOnly
							/>
							<CopyToClipboard text={formURL}>
								<button className="btn bg-template-black text-white ml-3">
									Copy
								</button>
							</CopyToClipboard>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

PublishButton.propTypes = {
	formURL: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

PublishButton.defaultProps = {
	formURL: window.location.origin
};

export default PublishButton;
