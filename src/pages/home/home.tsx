import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Card } from "@components/card/card";
import { CardHeader } from "@components/card/card-header";
import { CardContent } from "@components/card/card-content";
import { CardFooter } from "@components/card/card-footer";
import { SignupForm } from "@components/form/sign-up";

const Home = () => {
	return (
		<section className="section">
			<div className="container">
				<Card>
					<CardHeader title="Sign Up" />
					<CardContent>
						<SignupForm />
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export { Home };
