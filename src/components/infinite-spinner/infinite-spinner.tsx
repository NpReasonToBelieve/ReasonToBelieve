import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
	loop: Infinity,
	ease: "linear",
};

const InfiniteSpinner = () => {
	return (
		<div className="container-spinner">
			<motion.span
				id="spinner"
				className="loader"
				transition={spinTransition}
				animate={{ rotate: 360 }}
			></motion.span>
		</div>
	);
};

export { InfiniteSpinner };
