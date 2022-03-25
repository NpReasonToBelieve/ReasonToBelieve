import React from "react";
import * as Yup from "yup";

import { Signup } from "./signup";
import { Modal } from "@components/modal/modal";

const Home = () => {
	return (
		<section className="section">
			<div className="container">
				<h1>Welcome to our landing page</h1>
				<Modal id="signup">
					<Signup />
				</Modal>
			</div>
		</section>
	);
};

export { Home };
