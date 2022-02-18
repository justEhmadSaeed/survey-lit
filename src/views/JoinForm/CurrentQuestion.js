import { ArrowRightIcon, CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import PropTypes from 'prop-types';

const CurrentQuestion = ({ question, index, onOptionClick }) => {
	return (
		<div className="mt-32 text-left flex justify-start items-start w-3/4">
			<div className="flex items-center mr-2 text-blue-800">
				<span>{index + 1}</span>
				<ArrowRightIcon className="h-3 w-3 ml-1" />
			</div>
			<div>
				<div className="flex flex-col max-w-xl">
					{/* Question Title */}
					<div className="outline-none text-2xl break-words">
						{question.title ? question.title : '...'}
					</div>
					{/* Question Description */}
					<div className="outline-none mt-1 text-template-auth-text dark:text-template-auth-border">
						{question.desc}
					</div>
				</div>
				<div className="mt-6 w-fit">
					<ul className=" flex flex-col flex-wrap items-stretch">
						{/* Question Choices */}
						{question.choices &&
							question.choices.map((choice, i) => (
								<button
									onClick={() => {
										onOptionClick(index, i);
									}}
									key={choice.id}
									className={`${
										choice.selected
											? 'border-2'
											: 'border'
									} group w-full mb-2 flex items-center  border-blue-800 rounded bg-blue-100 hover:bg-blue-300 text-blue-800 p-1 cursor-pointer`}
								>
									<div
										className={`${
											choice.selected
												? 'bg-blue-800 text-white'
												: 'bg-white '
										} flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border border-blue-500`}
									>
										{String.fromCharCode(65 + i)}
									</div>
									<div className="w-full flex items-center">
										<span className="bg-transparent w-full px-2">
											{choice.text
												? choice.text
												: 'Choice ' + (i + 1)}
										</span>
										{choice.selected && (
											<CheckIcon className="h-7 w-7" />
										)}
									</div>
								</button>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};
CurrentQuestion.propTypes = {
	question: PropTypes.object,
	index: PropTypes.number.isRequired,
	onOptionClick: PropTypes.func.isRequired
};

CurrentQuestion.defaultProps = {
	question: {}
};
export default CurrentQuestion;
