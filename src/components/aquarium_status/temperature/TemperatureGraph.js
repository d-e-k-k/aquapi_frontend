import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



const TemperatureGraph = ({temperatureData}) => {
    const data =  temperatureData;
    console.log(temperatureData);
    // let formatted_data = []
    // temperatureData.forEach(dataPoint=> {
    //     formatted_data.push({

    //     })
    // })
    
	return (
		<LineChart width={600} height={300} data={data}>
			<Line type='monotone' dataKey='temperature' stroke='red' />
			<CartesianGrid stroke='#ccc' />
			<XAxis dataKey='time' />
			<YAxis />
		</LineChart>
	);
};

export default TemperatureGraph;
