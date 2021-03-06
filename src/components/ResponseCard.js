import React from 'react';
import { responsePropType } from 'utils/constants/prop-types.constant';
import PropTypes from 'prop-types';

const ResponseCard = ({ response, id }) => {
	return (
		<section className="w-full px-12 py-8 shadow-lg bg-white my-4 rounded-lg dark:bg-template-very-dark-green dark:text-template-light-grey">
			<div className="flex justify-between items-center">
				<div className="font-extrabold text-3xl ">
					{id + 1}.
				</div>
				<div className="py-4 ">
					<span className="text-template-auth-text dark:text-template-auth-border">
						Respondant&apos;s Name:{' '}
					</span>
					<span className="p-1 px-4 bg-template-hover-color dark:bg-template-dark-green">
						{response.userName}
					</span>
				</div>
			</div>
			{response.responseData.map((r, id) => (
				<div
					className="py-4 border-b dark:border-template-signup-text"
					key={id}
				>
					<div>
						<span className="text-template-auth-text dark:text-template-auth-border">
							{id + 1}. {r.title}
						</span>
					</div>
					<div>&emsp;{r.choice}</div>
				</div>
			))}
		</section>
	);
};

export default ResponseCard;

ResponseCard.propTypes = {
	response: responsePropType,
	id: PropTypes.number
};

ResponseCard.defaultProps = {
	response: [],
	id: ''
};
