import { ArrowRightIcon, CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import PropTypes from 'prop-types';
import { questionPropType } from 'utils/constants/prop-types.constant';

const CurrentQuestion = ({ question, index, onOptionClick }) => {
	return (
		<div className="mt-32 text-left flex justify-start items-start w-3/4 md:w-2/3 bg-white dark:bg-template-very-dark-green rounded shadow-lg p-12">
			<div className="flex items-center mr-2 text-template-dark-green dark:text-template-light-grey">
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
									} group w-full mb-2 flex items-center  border-template-dark-green rounded bg-template-green/10 hover:bg-template-green/30 text-template-dark-green dark:text-template-light-grey p-1 cursor-pointer`}
								>
									<div
										className={`${
											choice.selected
												? 'bg-template-dark-green text-white'
												: 'bg-white '
										} flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border border-template-green`}
									>
										{String.fromCharCode(65 + i)}
									</div>
									<div className="w-full flex items-center">
										<span className="bg-transparent w-full px-2 flex">
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
	question: questionPropType,
	index: PropTypes.number.isRequired,
	onOptionClick: PropTypes.func.isRequired
};

CurrentQuestion.defaultProps = {
	question: {
		id: '',
		title: '',
		desc: '',
		choices: [{ id: '', text: '' }]
	}
};
export default CurrentQuestion;
