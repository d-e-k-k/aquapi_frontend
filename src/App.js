import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import AquariumStatus from './components/aquarium_status/AquariumStatus';
import Home from './components/home/home';
import './App.css';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displayDash, setDisplayDash] = useState(false);
	const [displayHome, setDisplayHome] = useState(true);

	return (
		<div >
			<NavBar
				authenticated={authenticated}
				setAuthenticated={setAuthenticated}
				displayLogin={displayLogin}
				setDisplayLogin={setDisplayLogin}
				displayDash={displayDash}
				setDisplayDash={setDisplayDash}
				displayHome={setDisplayHome}
				setDisplayHome={setDisplayHome}
			/>
			{displayLogin ? (
				<Login
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
					setDisplayLogin={setDisplayLogin}
				/>
			) : null}
			<main>{displayDash ? <AquariumStatus /> : <Home />}</main>
		</div>
	);
}

export default App;
