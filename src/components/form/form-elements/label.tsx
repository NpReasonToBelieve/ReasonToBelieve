import React, { ReactNode } from "react";

type Props = {
	text: string | ReactNode;
	htmlFor?: string;
};

const Label = ({ text, htmlFor }: Props) => {
	return (
		<label className="label" htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export { Label };
