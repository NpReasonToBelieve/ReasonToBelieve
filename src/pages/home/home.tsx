import React from "react";

import { Signup } from "./signup";
import { Login } from "./login";
import { Modal } from "@components/modal/modal";
import { useUserAuth } from "@contexts/AuthContext";

const Home = () => {
	const { user } = useUserAuth();
	console.log("user ", useUserAuth());
	return (
		<section className="section">
			<div className="container">
				<h1>Welcome to our landing page</h1>
				<Modal id="signup">
					<Signup />
				</Modal>
				<Modal id="login">
					<Login />
				</Modal>
			</div>
		</section>
	);
};

export { Home };
