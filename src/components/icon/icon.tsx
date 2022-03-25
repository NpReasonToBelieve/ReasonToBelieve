import React from "react";

// See fonts here
// https://fontawesome.com/icons

type Props = {
	align: "left" | "right" | "both";
	leftIcon?: string;
	rightIcon?: string;
};

const Icon = ({ align, leftIcon, rightIcon }: Props) => {
	return (
		<>
			{(align === "left" || align === "both") && (
				<span className="icon is-small is-left">
					<i className={`fas ${leftIcon}`}></i>
				</span>
			)}
			{(align === "right" || align === "both") && (
				<span className="icon is-small is-right">
					<i className={`fas ${rightIcon}`}></i>
				</span>
			)}
		</>
	);
};

export { Icon };
