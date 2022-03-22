import React from "react";

import "./card.css";

type ImageProps = {
	src: string;
	alt: string;
};

type Props = {
	image: ImageProps;
};

const CardImage = ({ image }: Props) => {
	const { src, alt } = image;
	return (
		<div className="card-image">
			<img className="card-image" src={src} alt={alt} />
		</div>
	);
};

export { CardImage };
