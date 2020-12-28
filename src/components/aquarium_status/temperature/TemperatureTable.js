import React, { useState, useEffect } from 'react';
import { ResponsiveContainer } from 'recharts';

const TemperatureTable = ({ temperatureData }) => {
	const [keys, setKeys] = useState();

	temperatureData ? console.log(temperatureData[0]) : console.log('loading');

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
						{/* <tr> */}
							{temperatureData && temperatureData.length > 0
								? temperatureData.map((data, i) => {
									return (
										<tr>
											{keys && keys.length > 0 
												? keys.map(key=>{
													return <td>{data[key]}</td>
												})
												:null
											}
											{/* {Object.keys(data).map((key, i)=>{
												return <td>{data[key]}</td>
											})} */}
											{/* {data.map(key=> {
												return <td>{key}</td>
											})} */}
											{/* {keys && keys.length > 0
												? keys.map((key) => {
														return <td>{temperatureData[i].key}</td>;
												  })
												: null} */}
										</tr>
									);
								})
								: null 
							}
							{/* {keys && keys.length > 0
								? keys.map((key) => {
										return <td>{key}</td>;
								  })
								: null} */}
						{/* </tr> */}
					</table>
				</div>
			</div>
		</ResponsiveContainer>
	);
};

export default TemperatureTable;
