import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import AquariumStatus from './components/aquarium_status/AquariumStatus';
import './App.css';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);

	return (
		<div className='App'>
			<NavBar
				authenticated={authenticated}
				setAuthenticated={setAuthenticated}
				displayLogin={displayLogin}
				setDisplayLogin={setDisplayLogin}
			/>
			{displayLogin ? (
				<Login
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
					setDisplayLogin={setDisplayLogin}
				/>
			) : null}

			<AquariumStatus />
		</div>
	);
}

export default App;
