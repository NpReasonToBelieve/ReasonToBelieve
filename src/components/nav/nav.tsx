import React, { ReactElement, cloneElement } from "react";

import { NavBrand } from "./subcomponents/nav-brand";
import { NavbarItem } from "./subcomponents/navbar-item";
import ID from "@tools/random-id";

type Props = {
	brandImage: ReactElement;
	navStartItems: Array<any>;
	navEndItems?: Array<any>;
};

const Navbar = ({ brandImage, navStartItems, navEndItems }: Props) => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<NavBrand>
				<NavbarItem href="/">{brandImage}</NavbarItem>
			</NavBrand>

			<div id="navbar" className="navbar-menu">
				<div className="navbar-start">
					{navStartItems.map((item) => {
						const id = ID();
						return cloneElement(item, {
							key: id,
						});
					})}
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						{navEndItems &&
							navEndItems.map((item) => {
								const id = ID();

								return cloneElement(item, {
									key: id,
								});
							})}
					</div>
				</div>
			</div>
		</nav>
	);
};

export { Navbar };
