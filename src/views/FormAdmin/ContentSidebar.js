import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';

// Content sidebar where all questions appear
const ContentSidebar = ({
	questions,
	addQuestionsHandler,
	selectedQuestion,
	setSelectedQuestion,
	deleteQuestion
}) => {
	return (
		<section className="w-64 md:border self-center md:self-start h-full">
			<div className="flex flex-col justify-between h-full">
				{/* Add Questions */}
				<div className="flex p-4 justify-between items-center">
					<span className="text-sm">Content</span>
					<button
						className="btn bg-template-auth-border"
						onClick={addQuestionsHandler}
					>
						<span className="text-lg px-1">+</span>
					</button>
				</div>
				{/* Questions List */}
				<div className="flex-1 h-full overflow-y-auto border-b">
					<div className="">
						{questions.map((question, i) => (
							<li
								className={`${
									selectedQuestion === question.id
										? 'bg-template-hover-color dark:text-template-signup-text'
										: ''
								} w-full flex justify-between items-center py-3 pr-1 pl-4 cursor-pointer`}
								key={question.id}
							>
								<button
									className="w-full flex items-center"
									onClick={() => {
										setSelectedQuestion(
											question.id
										);
									}}
								>
									<div className="flex flex-nowrap items-center">
										<div className="flex items-center justify-between h-6 w-14 pr-2 rounded bg-template-question-icon">
											<div className="p-1">
												<CheckIcon className="h-4 w-4" />
											</div>
											<div className="text-sm">
												{i + 1}
											</div>
										</div>
									</div>
									<div className="ml-3 w-28 text-left whitespace-nowrap overflow-ellipsis text-xs flex-1 overflow-hidden">
										{question.title}
									</div>
								</button>
								{questions.length > 1 && (
									<button
										className="p-1 rounded-lg hover:bg-template-hover-color"
										onClick={() => {
											deleteQuestion(
												question.id
											);
										}}
									>
										<TrashIcon className="h-4 w-4 text-template-auth-text" />
									</button>
								)}
							</li>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

ContentSidebar.propTypes = {
	questions: PropTypes.array,
	addQuestionsHandler: PropTypes.func.isRequired,
	selectedQuestion: PropTypes.string,
	setSelectedQuestion: PropTypes.func.isRequired,
	deleteQuestion: PropTypes.func.isRequired
};

ContentSidebar.defaultProps = {
	questions: [],
	selectedQuestion: ''
};

export default ContentSidebar;
