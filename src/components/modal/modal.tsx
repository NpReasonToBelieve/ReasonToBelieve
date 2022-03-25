import React, { ReactChildren, ReactElement } from "react";

import "./modal.css";

type Props = {
	id: string;
	children: ReactElement;
};

const Modal = ({ children, id }: Props) => {
	return (
		<div id={id} className="modal">
			<div className="modal-background"></div>

			<div className="modal-content">
				<div className="box">{children}</div>
			</div>

			<button className="modal-close is-large" aria-label="close"></button>
		</div>
	);
};

export { Modal };
