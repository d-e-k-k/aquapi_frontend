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
	const [keys, setKeys] = useState();
	const [radioBtn, setRadioBtn] = useState('temperatures/range/');
	return (
		<div>
			<div className='status-container'>
				<div className='card basic-info cgi'>
					<BasicInfo />
				</div>
				<div className='card equipment cgi'>
					<EquipmentInfo />
				</div>
				<div className='card fish cgi'>
					<FishInfo />
				</div>
				<div className='card water cgi'>
					<WaterChange />
				</div>
				<div className='card date cgi'>
					<DateRangeForm setTemperatureData={setTemperatureData} radioBtn={radioBtn} setRadioBtn={setRadioBtn}/>
				</div>
				<div className='card graph-con cgi'>
					<TemperatureGraph temperatureData={temperatureData} radioBtn={radioBtn} keys={keys} setKeys={setKeys}/>
				</div>
				<div className='card table-con cgi'>
					<TemperatureTable temperatureData={temperatureData} radioBtn={radioBtn} keys={keys} setKeys={setKeys}/>
				</div>
			</div>
		</div>
	);
};

export default AquariumStatus;
