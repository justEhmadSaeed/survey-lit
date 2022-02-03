import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import QuestionChoices from './QuestionChoices';
import PropTypes from 'prop-types';

const QuestionContent = ({ question, selectedQuestion }) => {
	return (
		<section className="flex-1 pt-8 px-4 pb-16 h-full bg-template-dashboard-bg">
			<div className="w-full h-full flex justify-center items-start rounded-lg shadow-md bg-white overflow-hidden">
				<div className="mt-32 text-left flex justify-start items-start w-3/4">
					<div className="flex items-center mr-2 text-blue-800">
						<span>{selectedQuestion + 1}</span>
						<ArrowRightIcon className="h-3 w-3 ml-1" />
					</div>
					<div className="w-96">
						<div className="flex flex-col">
							<input
								type="text"
								placeholder="Your question here ..."
								className="italic outline-none text-lg"
							/>
							<input
								type="text"
								placeholder="Description (optional)"
								className="italic outline-none text-sm mt-1 text-template-auth-text"
							/>
						</div>
						<div className="mt-6">
							<QuestionChoices
								choices={question.choices}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
QuestionContent.propTypes = {
	question: PropTypes.object,
	selectedQuestion: PropTypes.number
};

QuestionContent.defaultProps = {
	question: {},
	selectedQuestion: 0
};
export default QuestionContent;
