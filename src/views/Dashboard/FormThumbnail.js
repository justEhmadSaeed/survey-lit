import { DotsHorizontalIcon } from '@heroicons/react/solid';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PATH_CREATE_FORM_ADMIN } from 'utils/constants/routing-paths.constant';

const FormThumbnail = ({ title, id, responses }) => {
	return (
		<div className="mr-5 mb-5 w-36 sm:w-44 h-52 shadow rounded-lg group hover:shadow-lg">
			<div className="flex h-full flex-col flex-nowrap">
				{/* Thumbnail */}
				<div className="flex-1">
					<Link
						to={`${PATH_CREATE_FORM_ADMIN}/${id}`}
						className="w-full h-full flex-1 relative"
					>
						<div className=" h-full p-4 bg-template-green rounded-t-lg">
							<span className="flex flex-col items-center justify-center h-full overflow-hidden break-words text-center text-white">
								{title}
							</span>
						</div>
					</Link>
				</div>
				<div className="shrink-0 p-4">
					<div className="flex justify-between items-center">
						<Link
							to="#"
							className="text-xs p-1 rounded group-hover:bg-template-auth-border dark:group-hover:bg-template-auth-text"
						>
							{responses} responses
						</Link>
						<button className="hover:bg-template-auth-border h-full px-1 rounded">
							<DotsHorizontalIcon className="h-5 w-5 text-template-auth-text" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
FormThumbnail.propTypes = {
	title: PropTypes.string,
	responses: PropTypes.number,
	id: PropTypes.string
};

FormThumbnail.defaultProps = {
	title: '',
	responses: 0,
	id: undefined
};

export default FormThumbnail;
