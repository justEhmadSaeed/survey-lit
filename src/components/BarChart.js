import React from 'react';

import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries
} from 'react-vis';

const BarChart = ({ data }) => {
	const BarSeries = VerticalBarSeries;
	const colors = [
		'#79C7E3',
		'#12939A',
		'#1A3177',
		'#FF9833',
		'#EF5D28'
	];
	return (
		<div>
			<XYPlot
				xType="ordinal"
				stackBy="y"
				width={300}
				height={300}
				className="clustered-stacked-bar-chart-example w-300 lg:wd-900"
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				{data.map((d, i) => (
					<BarSeries
						key={i}
						color={colors[i]}
						animation="gentle"
						data={[d]}
					/>
				))}
			</XYPlot>
		</div>
	);
};

export default BarChart;
