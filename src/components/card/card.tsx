import React, { ReactNode, memo } from "react";

type Props = {
	children: ReactNode;
};

const Card = memo(({ children }: Props) => {
	return <div className="card">{children}</div>;
});

export { Card };
