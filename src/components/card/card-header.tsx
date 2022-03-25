import React from "react";

type Props = {
	title: string;
	icon?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CardHeader = ({ title, icon, onClick }: Props) => {
	return (
		<header className="card-header">
			<p className="card-header-title">{title}</p>
			{icon && (
				<button
					onClick={onClick}
					className="card-header-icon"
					aria-label="more options"
				>
					<span className="icon">
						<i className="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</button>
			)}
		</header>
	);
};

export { CardHeader };
