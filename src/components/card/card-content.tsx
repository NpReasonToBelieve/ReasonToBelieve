import React, { ReactNode, memo } from "react";

type Props = {
	children: ReactNode;
};

const CardContent = memo(({ children }: Props) => {
	return (
		<div className="card-content">
			<div className="content">{children}</div>
		</div>
	);
});

export { CardContent };
