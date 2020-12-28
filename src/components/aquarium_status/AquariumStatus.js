import React, { useState, useEffect } from 'react';
import BasicInfo from './basic_info/BasicInfo';
import EquipmentInfo from './equipment_info/EquipmentInfo';
import FishInfo from './fish_info/FishInfo';
import WaterChange from './water_change/WaterChange';
import TemperatureTable from './temperature/TemperatureTable';
import TemperatureGraph from './temperature/TemperatureGraph';
import DateRangeForm from './temperature/DateRangeForm';

const AquariumStatus = () => {
	const [temperatureData, setTemperatureData] = useState([]);
	const [radioBtn, setRadioBtn] = useState('hourly');
	return (
		<div>
			<div class='status-container'>
				<div class='card basic-info cgi'>
					<BasicInfo />
				</div>
				<div class='card equipment cgi'>
					<EquipmentInfo />
				</div>
				<div class='card fish cgi'>
					<FishInfo />
				</div>
				<div class='card water cgi'>
					<WaterChange />
				</div>
				<div class='card date cgi'>
					<DateRangeForm setTemperatureData={setTemperatureData} radioBtn={radioBtn} setRadioBtn={setRadioBtn}/>
				</div>
				<div class='card graph-con cgi'>
					<TemperatureGraph temperatureData={temperatureData} radioBtn={radioBtn}/>
				</div>
				<div class='card table-con cgi'>
					<TemperatureTable temperatureData={temperatureData} radioBtn={radioBtn}/>
				</div>
			</div>
		</div>
	);
};

export default AquariumStatus;
