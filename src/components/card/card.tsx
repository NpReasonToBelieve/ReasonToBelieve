import React, { ReactNode, memo } from "react";

import { CardHeader } from "./card-header";
import { CardFooter } from "./card-footer";
import { CardImage } from "./card-image";
import { CardContent } from "./card-content";

type Props = {
	children: ReactNode;
};

const Card = memo(({ children }: Props) => {
	return (
		<div className="columns is-centered">
			<div className="column is-half">
				<div className="card">{children}</div>
			</div>
		</div>
	);
});

export { Card };
