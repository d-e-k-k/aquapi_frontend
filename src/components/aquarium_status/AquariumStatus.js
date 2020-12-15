import React, {useState, useEffect} from 'react';
import BasicInfo from './basic_info/BasicInfo'
import EquipmentInfo  from './equipment_info/EquipmentInfo'
import FishInfo from './fish_info/FishInfo'
import TemperatureList from './temperature/TemperatureList'
import axios from 'axios'


const AquariumStatus = () => {


	return (
		<div>
			<h2>D-e-k-k's Tank</h2>
			<div>
				<BasicInfo />
				<EquipmentInfo />
                <FishInfo />
                <TemperatureList />
			</div>
		</div>
	);
};

export default AquariumStatus;
