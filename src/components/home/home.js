import React from 'react';
let x = window.outerWidth;
console.log(x);
const home = () => {
	return (
		<div class='home-background'>
			<div class='home-text'>
				<h2>Welcome...</h2>
				<h3>What is AquaPi?</h3>
				<p>
					AquaPi is an automated aquarium controller that can monitor and manage
					a variety of aquarium components. Built with a RaspberryPi single
					board computer and some sensors, the AquaPi framework is extremely
					customizable and affordable. Excited….?
				</p>
				<h3>Under Construction</h3>
				<p>
					Currently, this application is under construction and only monitoring
					one aquarium. Feel free to play around, checkout out the source code,
					or make a version for yourself! If you do enjoy it or want to
					collaborate, please reach out on github!
				</p>
				<h3>Github</h3>
				<ul>
					<li>
						{' '}
						<a href='https://github.com/d-e-k-k/aquapi_frontend'>Front-end</a>
					</li>
					<li>
						<a href='https://github.com/d-e-k-k/aquapi_backend'>Back-end</a>
					</li>
					<li>
						<a href='https://github.com/d-e-k-k/aquapi_aquarium_controller'>
							RaspberryPi Aquarium Controller{' '}
						</a>
					</li>
				</ul>
				<h3>Employed Technologies</h3>
				<ul>
					<li>React.JS</li>
					<li>Python</li>
					<li>Django REST Framework</li>
				</ul>
				<h3>Hardware</h3>
				<ul>
					<li>RaspberryPi 4 B</li>
					<li>DS18B20 Waterproof Digital Temperature Sensor with adapter</li>
					<li>A variety of jumper wires</li>
					<li>220 ohm resistor</li>
					<li>LED</li>
				</ul>
			</div>
		</div>
	);
};

export default home;
