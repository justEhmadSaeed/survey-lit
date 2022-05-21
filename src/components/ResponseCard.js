import React from 'react';

const ResponseCard = ({ response, id }) => {
	return (
		<section className="w-full px-12 py-8 shadow-lg bg-white my-4 rounded-lg">
			<div className="flex justify-between items-center">
				<div className="font-extrabold text-3xl">{id++}.</div>
				<div className="py-4 ">
					<span className="text-template-auth-text">
						Respondant&apos;s Name:{' '}
					</span>
					<span className="p-1 px-4 bg-template-hover-color">
						{response.respName}
					</span>
				</div>
			</div>
			{response.responses.map((r, id) => (
				<div className="py-4 border-b" key={id}>
					<div>
						<span className="text-template-auth-text">
							{id++}. {r.title}
						</span>
					</div>
					<div>&emsp;{r.choice}</div>
				</div>
			))}
		</section>
	);
};

export default ResponseCard;
