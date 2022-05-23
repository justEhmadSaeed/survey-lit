import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/solid';
import BarChart from 'components/BarChart';
import React, { useEffect, useState } from 'react';
import { DiscreteColorLegend, RadialChart } from 'react-vis/dist';
import { CHART } from 'utils/constants/chartConstants';
const ResponsesGraph = ({ title, options, type }) => {
	const colors = [
		'#79C7E3',
		'#12939A',
		'#1A3177',
		'#FF9833',
		'#EF5D28'
	];
	const data = [];
	const legendItems = [];

	let i = 0;
	for (let ops in options) {
		data.push({
			angle: options[ops],
			label: ops
		});
		legendItems.push({
			title: ops,
			color: colors[i]
		});
		i++;
		if (i > colors.length) i = 0;
	}
	const barData = [];
	for (let op in options) {
		barData.push({ x: op, y: options[op] });
	}

	const [chartType, setChartType] = useState(CHART.PIE);
	useEffect(() => {
		setChartType(type);
	}, [type]);

	const toggleChartType = () => {
		chartType === CHART.PIE
			? setChartType(CHART.BAR)
			: setChartType(CHART.PIE);
	};
	return (
		<div className="w-full px-12 py-8 pt-2 shadow-lg bg-white my-4 rounded-lg dark:bg-template-very-dark-green dark:text-template-light-grey">
			<div className="w-full flex justify-end">
				<button
					className="rounded p-2 hover:bg-template-hover-color hover:text-template-maroon dark:hover:bg-template-green dark:hover:text-white"
					onClick={toggleChartType}
				>
					{chartType === CHART.PIE ? (
						<div className="flex">
							<ChartBarIcon className="w-6" />
						</div>
					) : (
						<div className="flex">
							<ChartPieIcon className="w-6" />
						</div>
					)}
				</button>
			</div>
			<div className="py-5">
				<b>Question: </b> {title}
			</div>
			<hr />
			<div className="py-5">
				{chartType === CHART.PIE ? (
					<div className="flex flex-col md:flex-row justify-between items-end">
						<RadialChart
							data={data}
							width={300}
							height={300}
						/>
						<DiscreteColorLegend
							style={{
								width: '50%',
								'justify-content': 'space-evenely',
								margin: '10px'
							}}
							orientation="vertical"
							items={legendItems}
						/>
					</div>
				) : (
					<BarChart data={barData} />
				)}
			</div>
		</div>
	);
};

export default ResponsesGraph;
