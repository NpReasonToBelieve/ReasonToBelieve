import React from "react";
import clsx from "clsx";

type Props = {
	label: string;
	icon?: string;
	alignIcon?: "left" | "right" | "both";
	className?: string;
};

const TextInput = ({ label, alignIcon, className }: Props) => {
	const containerClasses = clsx(className, {
		"has-icons-left": alignIcon === "left",
		"has-icons-right": alignIcon === "right",
		"has-icons-left has-icons-right": alignIcon === "both",
	});

	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className={`control ${containerClasses}`}>
				<input
					className="input is-success"
					type="text"
					placeholder="Text input"
					value="bulma"
				/>
				<span className="icon is-small is-left">
					<i className="fas fa-user"></i>
				</span>
				<span className="icon is-small is-right">
					<i className="fas fa-check"></i>
				</span>
			</div>
			<p className="help is-success">This username is available</p>
		</div>
	);
};

export { TextInput };
