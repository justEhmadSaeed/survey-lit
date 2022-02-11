import { ArrowRightIcon, CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import PropTypes from 'prop-types';

const CurrentQuestion = ({ question, index }) => {
	return (
		<section className="flex-1 pt-8 px-4 pb-16 h-full">
			<div className="w-full h-full flex justify-center items-start bg-white">
				<div className="mt-32 text-left flex justify-start items-start w-3/4 h-80">
					<div className="flex items-center mr-2 text-blue-800">
						<span>{index + 1}</span>
						<ArrowRightIcon className="h-3 w-3 ml-1" />
					</div>
					<div className="">
						<div className="flex flex-col max-w-xl">
							{/* Question Title */}
							<div className="outline-none text-2xl break-words">
								{question.title
									? question.title
									: '...'}
							</div>
							{/* Question Description */}
							<div className="outline-none mt-1 text-template-auth-text">
								{question.desc}
							</div>
						</div>
						<div className="mt-6 w-fit">
							<ul className=" flex flex-col flex-wrap items-stretch">
								{/* Question Choices */}
								{question.choices &&
									question.choices.map(
										(choice, i) => (
											<li
												key={choice.id}
												className="group w-full mb-2 flex items-center border border-blue-500 rounded bg-blue-100 hover:bg-blue-300 text-blue-800 p-1 cursor-pointer"
											>
												<div className="flex justify-center items-center self-start my-1 mr-2 ml-1 w-6 h-6 rounded text-sm border bg-white border-blue-500">
													{String.fromCharCode(
														65 + i
													)}
												</div>
												<div className="w-full flex">
													<span className="bg-transparent w-full outline-none px-2">
														{choice.text}
													</span>
												</div>
											</li>
										)
									)}
								<li className="w-full mb-2">
									<button
										className="btn bg-blue-800 text-white mt-2 font-bold shadow-md"
										// onClick={() =>
										// 	addChoice(index)
										// }
									>
										<span className="flex items-center text-lg">
											<span>OK</span>
											<span>
												<CheckIcon className="h-6 w-6" />
											</span>
										</span>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
CurrentQuestion.propTypes = {
	question: PropTypes.object,
	index: PropTypes.number.isRequired
};

CurrentQuestion.defaultProps = {
	question: {}
};
export default CurrentQuestion;
