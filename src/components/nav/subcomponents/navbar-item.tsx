import React, { ReactElement } from "react";

type Props = {
	href?: string;
	children: ReactElement;
};

const NavbarItem = ({ href, children }: Props) => (
	<a className="navbar-item" href={href}>
		{children}
	</a>
);

export { NavbarItem };
