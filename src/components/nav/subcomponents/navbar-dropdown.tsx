import React, { ReactElement, ReactNode } from "react";

type Props = {
	parentText: ReactNode;
	items: Array<ReactElement>;
};

const NavbarDropdown = ({ parentText, items }: Props) => (
	<div className="navbar-item has-dropdown is-hoverable">
		<a className="navbar-link">{parentText}</a>

		<div className="navbar-dropdown">{items}</div>
	</div>
);

export { NavbarDropdown };
