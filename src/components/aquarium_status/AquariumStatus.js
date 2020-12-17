import React, { useState, useEffect } from 'react';
import BasicInfo from './basic_info/BasicInfo';
import EquipmentInfo from './equipment_info/EquipmentInfo';
import FishInfo from './fish_info/FishInfo';
import TemperatureList from './temperature/TemperatureList';
import WaterChange from './water_change/WaterChange';
import TemperatureTable from './temperature/TemperatureTable'
import TemperatureGraph from './temperature/TemperatureGraph'
import DateRangeForm from './temperature/DateRangeForm'


const AquariumStatus = () => {
	const [temperatureData, setTemperatureData] = useState();
	return (
		<div>
			<h2>D-e-k-k's Tank</h2>
			<div class='quick-stats-con'>
				<div class='card'>
					<BasicInfo />
				</div>
				<div class='card'>
					<EquipmentInfo />
				</div>
				<div class='card'>
					<FishInfo />
				</div>
				<div class='card'>
					<WaterChange />
				</div>
				<div>
					<DateRangeForm setTemperatureData={setTemperatureData} />
				</div>
				<div>
					<TemperatureGraph temperatureData={temperatureData} />
				</div>
				<div>
					<TemperatureTable temperatureData={temperatureData} />
				</div>
			</div>
		</div>
	);
};

export default AquariumStatus;
