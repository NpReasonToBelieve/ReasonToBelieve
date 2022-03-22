import React, { ReactNode, memo } from "react";

type Props = {
	children: ReactNode;
};

const CardFooter = memo(({ children }: Props) => {
	return <footer className="card-footer">{children}</footer>;
});

export { CardFooter };
