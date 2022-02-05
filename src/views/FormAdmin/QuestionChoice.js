import { XCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuestionChoice = ({ choice, handleChoiceChange, index }) => {
	const [localChoice, setLocalChoice] = useState(choice);

	const handleInputChange = (event) => {
		setLocalChoice({ ...localChoice, text: event.target.value });
	};
	return (
		<li className="group w-full mb-2 flex items-center border border-blue-500 rounded shadow bg-blue-100 text-blue-800 p-1 cursor-pointer">
			<div className="flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border bg-white border-blue-500">
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
				<button className="-mr-4 opacity-80 hidden group-hover:block">
					<XCircleIcon className="h-6 w-6 text-template-signup-text" />
				</button>
			</div>
		</li>
	);
};
QuestionChoice.propTypes = {
	choice: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	handleChoiceChange: PropTypes.func.isRequired
};

QuestionChoice.defaultProps = {};
export default QuestionChoice;
