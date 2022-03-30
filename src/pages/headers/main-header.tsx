import React from "react";
import { Navbar } from "@components/nav/nav";
import { Button } from "@components/button/button";

const MainHeader = () => {
	const brandImage = (
		<img className="logo" src="/assets/img/reason-to-believe.jpg" />
	);

	const items = [
		<a className="navbar-item">Home</a>,
		<a className="navbar-item js-modal-trigger" data-target="login">
			Portal
		</a>,
		<a className="navbar-item">Donate</a>,
		<a className="navbar-item">About Us</a>,
	];

	const endItems = [<Button buttonType="dark">Donate Now</Button>];
	return (
		<div className="main-header">
			<Navbar
				brandImage={brandImage}
				navStartItems={items}
				navEndItems={endItems}
			/>
		</div>
	);
};

export { MainHeader };
