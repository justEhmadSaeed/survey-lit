import { XCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { choicePropType } from 'utils/constants/prop-types.constant';

const QuestionChoice = ({
	choice,
	handleChoiceChange,
	deleteChoice,
	index,
	showDeleteIcon
}) => {
	const [localChoice, setLocalChoice] = useState(choice);

	const handleInputChange = (event) => {
		setLocalChoice({ ...localChoice, text: event.target.value });
	};
	return (
		<li className="group w-full mb-2 flex items-center border  border-template-maroon dark:border-template-border-green rounded shadow text-template-very-dark-green bg-template-light-grey dark:bg-template-green p-1 cursor-pointer">
			<div className="flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border bg-template-maroon  border-template-maroon dark:border-template-border-green dark:bg-template-very-dark-green text-template-light-grey">
				{String.fromCharCode(65 + index)}
			</div>
			<div className="w-full flex">
				<input
					type="text"
					placeholder="choice"
					className="bg-transparent w-full outline-none px-2"
					value={localChoice.text}
					onChange={handleInputChange}
					onBlur={() => {
						handleChoiceChange(localChoice);
					}}
				/>
				{showDeleteIcon && (
					<button
						className="-mr-4 opacity-80 hidden group-hover:block"
						onClick={() => deleteChoice(index)}
					>
						<XCircleIcon className="h-6 w-6 text-template-maroon dark:text-template-light-grey" />
					</button>
				)}
			</div>
		</li>
	);
};
QuestionChoice.propTypes = {
	choice: choicePropType.isRequired,
	index: PropTypes.number.isRequired,
	handleChoiceChange: PropTypes.func.isRequired,
	deleteChoice: PropTypes.func.isRequired,
	showDeleteIcon: PropTypes.bool
};

QuestionChoice.defaultProps = {};
export default QuestionChoice;
