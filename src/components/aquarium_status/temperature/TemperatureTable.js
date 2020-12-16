import React, { useState } from 'react';

const TemperatureTable = ({temperatureData}) => {
	return (
		<div class='table'>
			<table id='customers'>
				<tr>
					<th>Date</th>
					<th>Time</th>
					<th>Temperature</th>
				</tr>
				{temperatureData
					? temperatureData.map((data) => {
							return (
								<tr key={data.id}>
									<td>{data.date}</td>
									<td>{data.time}</td>
									<td>{data.temperature}</td>
								</tr>
							);
					  })
					: null}
			</table>
		</div>
	);
};

export default TemperatureTable;
