import React, { useState, useEffect } from 'react';
import BasicInfo from './basic_info/BasicInfo';
import EquipmentInfo from './equipment_info/EquipmentInfo';
import FishInfo from './fish_info/FishInfo';
import WaterChange from './water_change/WaterChange';
import TemperatureTable from './temperature/TemperatureTable'
import TemperatureGraph from './temperature/TemperatureGraph'
import DateRangeForm from './temperature/DateRangeForm'


const AquariumStatus = () => {
	const [temperatureData, setTemperatureData] = useState();
	return (
		<div>
			{/* <h2>D-e-k-k's Tank</h2> */}
			<div class='status-container'>
				<div class='card basic-info'>
					<BasicInfo />
				</div>
				<div class='card equipment'>
					<EquipmentInfo />
				</div>
				<div class='card fish'>
					<FishInfo />
				</div>
				<div class='card water'>
					<WaterChange />
				</div>
				<div class="date">
					<DateRangeForm setTemperatureData={setTemperatureData} />
				</div>
				<div class="graph-con">
					<TemperatureGraph temperatureData={temperatureData} />
				</div>
				<div class="table-con">
					<TemperatureTable temperatureData={temperatureData} />
				</div>
			</div>
		</div>
	);
};

export default AquariumStatus;
