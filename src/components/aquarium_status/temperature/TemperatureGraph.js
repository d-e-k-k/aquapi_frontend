import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
	{ name: 'Page A', uv: 400, pv: 2100, amt: 2400 },
	{ name: 'Page B', uv: 450, pv: 2100, amt: 2400 },
	{ name: 'Page C', uv: 500, pv: 2200, amt: 2400 },
	{ name: 'Page D', uv: 300, pv: 2000, amt: 2400 },
];


const TemperatureGraph = () => {
	return (
		<LineChart width={600} height={300} data={data}>
			<Line type='monotone' dataKey='uv' stroke='#8884d8' />
			<CartesianGrid stroke='#ccc' />
			<XAxis dataKey='name' />
			<YAxis />
		</LineChart>
	);
};

export default TemperatureGraph;
