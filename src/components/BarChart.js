import React, { useEffect, useState } from 'react';

import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	DiscreteColorLegend
} from 'react-vis';

const BarChart = ({ data }) => {
	const BarSeries = VerticalBarSeries;

	return (
		<div>
			<XYPlot
				className="clustered-stacked-bar-chart-example"
				xType="ordinal"
				stackBy="y"
				width={700}
				height={300}
			>
				<DiscreteColorLegend
					style={{
						position: 'absolute',
						left: '50px',
						top: '10px'
					}}
					orientation="horizontal"
					items={[
						{
							title: 'Apples',
							color: '#12939A'
						},
						{
							title: 'Oranges',
							color: '#79C7E3'
						}
					]}
				/>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				<BarSeries
					animation="gentle"
					cluster="2015"
					color="#12939A"
					data={data}
				/>
			</XYPlot>
		</div>
	);
};

export default BarChart;
