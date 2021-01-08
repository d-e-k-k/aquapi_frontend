import React, { useState, useEffect } from 'react';
import styles from './NavBar.css';

const NavBar = ({
	authenticated,
	setAuthenticated,
	setDisplayLogin,
	displayDash,
	setDisplayDash,
	setDisplayHome,
}) => {
	function handleSignOut() {
		localStorage.removeItem('token');
		setAuthenticated(false);
	}

	function renderLoginPage() {
		setDisplayLogin(true);
	}

	function openDash() {
		setDisplayDash(true);
		setDisplayHome(false);
	}

	function openHome() {
		setDisplayDash(false);
		setDisplayHome(true);
	}
	useEffect(() => {}, [authenticated]);

	return (
		<header>
			<ul className='links'>
				<li className="flex-more">
					<h1>AquaPi</h1>
				</li>
				{displayDash ? (
					<li  onClick={openHome}>
						<span>Home</span>
					</li>
				) : (
					<li  onClick={openDash}>
						<span>Dash</span>
					</li>
				)}
				{authenticated ? (
					<li  onClick={handleSignOut}>
						<span>Sign Out</span>
					</li>
				) : (
					<li  onClick={renderLoginPage}>
						<span>Login</span>
					</li>
				)}
				<li ><span>Register</span></li>
			</ul>
		</header>
	);
};

export default NavBar;
