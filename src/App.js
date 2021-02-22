import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import AquariumStatus from './components/aquarium_status/AquariumStatus';
import Home from './components/home/home';
import Register from './components/register/Register'
import './App.css';
import axios from 'axios';
import ReactGa, { pageview } from 'react-ga';
import env from "react-dotenv";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displayDash, setDisplayDash] = useState(false);
	const [displayHome, setDisplayHome] = useState(true);
	const [displayRegister, setDisplayRegister] = useState(false)

	
	axios.get('https://mighty-lake-45709.herokuapp.com/')

	useEffect(() => {
		ReactGa.initialize(env.GA_ID);
		ReactGa.pageview("/");
	}, [])

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
				setDisplayRegister={setDisplayRegister}
			/>
			{displayLogin ? (
				<Login
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
					setDisplayLogin={setDisplayLogin}
				/>
			) : null}
			{displayRegister ?
			 <Register setDisplayRegister={setDisplayRegister}/>
			 : null}
			<main>{displayDash ? <AquariumStatus /> : <Home />}</main>
		</div>
	);
}

export default App;
