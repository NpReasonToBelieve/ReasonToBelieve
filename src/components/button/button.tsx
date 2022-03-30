import React, { ReactNode } from "react";
import clsx from "clsx";

import "./button.css";

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	buttonType?: string;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	children: ReactNode;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

const Button = ({
	buttonType = "primary",
	size = "medium",
	backgroundColor,
	children,
	type,
	...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const classes = clsx("button", `is-${buttonType}`, `is-${size}`);
	return (
		<button
			type={type}
			className={classes}
			style={{ backgroundColor }}
			{...props}
		>
			{children}
		</button>
	);
};

export { Button };
