import React, { useState, useEffect } from 'react';
import { ResponsiveContainer } from 'recharts';

const TemperatureTable = ({ temperatureData, keys, setKeys }) => {
	

	useEffect(() => {
		if (temperatureData && temperatureData.length > 0) {
			let allKeys = Object.keys(temperatureData[0]);
			let idIndex = allKeys.indexOf('id');
			if (idIndex !== -1) {
				allKeys.splice(idIndex, 1);
			}
			setKeys(allKeys);
		}
	}, [temperatureData]);
	if (temperatureData && temperatureData.length > 0 && keys && keys.length > 0){

		return (
			<ResponsiveContainer>
				<div class='table'>
					<div>
						<table id='customers'>
							<tr>{keys ? keys.map((key) => <th>{key}</th>) : null}</tr>
						</table>
					</div>
					<div class='table-body'>
						<table>
							{temperatureData && temperatureData.length > 0
								? temperatureData.map((data, i) => {
										return (
											<tr>
												{keys && keys.length > 0
													? keys.map((key) => {
															return <td>{data[key]}</td>;
													  })
													: null}
											</tr>
										);
								  })
								: null}
						</table>
					</div>
				</div>
			</ResponsiveContainer>
		);
	}else{
		return (
			<div>
				<h3>Table: No Data</h3>
				<p>The date range you selected had no data.</p>
				<p>Please try another date range</p>
			</div>
		);
	}
};

export default TemperatureTable;
