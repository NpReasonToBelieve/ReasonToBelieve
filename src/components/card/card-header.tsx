import React from "react";

type Props = {
	title: string;
};

const CardHeader = ({ title }: Props) => {
	return (
		<header className="card-header">
			<p className="card-header-title">{title}</p>
			<button className="card-header-icon" aria-label="more options">
				<span className="icon">
					<i className="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</button>
		</header>
	);
};

export { CardHeader };
