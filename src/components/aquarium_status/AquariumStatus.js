import React, { useState, useEffect } from 'react';
import BasicInfo from './basic_info/BasicInfo';
import EquipmentInfo from './equipment_info/EquipmentInfo';
import FishInfo from './fish_info/FishInfo';
import TemperatureList from './temperature/TemperatureList';
import axios from 'axios';
import WaterChange from './water_change/WaterChange';

const AquariumStatus = () => {
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
			</div>
			<TemperatureList />
		</div>
	);
};

export default AquariumStatus;
