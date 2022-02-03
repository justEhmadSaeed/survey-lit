import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import PropTypes from 'prop-types';

const QuestionChoices = ({ choices }) => {
	const onAddChoiceHandler = () => {};
	return (
		<ul className="max-w-full flex flex-col flex-wrap items-stretch">
			{choices.map((choice, i) => (
				<li
					key={i}
					className="group w-full mb-2 flex items-center border border-blue-500 rounded shadow bg-blue-100 text-blue-800 p-1 cursor-pointer"
				>
					<div className="flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border bg-white border-blue-500">
						{String.fromCharCode(65 + i)}
					</div>
					<div className="w-full flex">
						<input
							type="text"
							placeholder="choice"
							className="bg-transparent w-full outline-none px-2"
						/>
						<button className="-mr-4 opacity-80 hidden group-hover:block">
							<XCircleIcon className="h-6 w-6 text-template-signup-text" />
						</button>
					</div>
				</li>
			))}
			<li className="w-full mb-2">
				<button
					className="text-blue-800 mt-2 underline"
					onClick={onAddChoiceHandler}
				>
					Add choice
				</button>
			</li>
		</ul>
	);
};
QuestionChoices.propTypes = {
	choices: PropTypes.array
};

QuestionChoices.defaultProps = {
	choices: []
};
export default QuestionChoices;
