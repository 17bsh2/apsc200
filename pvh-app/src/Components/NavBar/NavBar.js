import "./NavBar.css";

import React from "react";

// import Logo from './logo.png';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const page = window.location.pathname;
		return (
			<header
				style={{
					display: page === "/Home" ? "none" : ""
				}}
			>
				<nav className="nav">
					<div className="nav-bar">
						<a
							href="/"
							className={`nav-btn ${
								page === "/" ? "btn-selected" : ""
							}`}
						>
							Home
						</a>
						<a
							href="/Data"
							className={`nav-btn ${
								page === "/Data" ? "btn-selected" : ""
							}`}
						>
							Data
						</a>
						<a
							href="/Camera"
							className={`nav-btn ${
								page === "/Camera" ? "btn-selected" : ""
							}`}
						>
							Camera
						</a>
						<a
							href="/Settings"
							className={`nav-btn ${
								page === "/Settings" ? "btn-selected" : ""
							}`}
						>
							Settings
						</a>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavBar;
