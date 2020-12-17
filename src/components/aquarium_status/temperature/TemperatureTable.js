import React, { useState } from 'react';

const TemperatureTable = ({ temperatureData }) => {
	return (
		<div class='table'>
			<div>
				<table id='customers'>
					<tr>
						<th>Date</th>
						<th>Time</th>
						<th>Temperature</th>
					</tr>
				</table>
			</div>
			<div class='table-body'>
				<table>
					{temperatureData
						? temperatureData.map((data) => {
								return (
									<tr key={data.id}>
										<td>{data.date}</td>
										<td>{data.time}</td>
										<td>{data.temperature.toFixed(2)}</td>
									</tr>
								);
						  })
						: null}
				</table>
			</div>
		</div>
	);
};

export default TemperatureTable;
