import React, { useState } from "react";
import * as Yup from "yup";

import { Card } from "@components/card/card";
import { CardHeader } from "@components/card/card-header";
import { CardContent } from "@components/card/card-content";
import { CardFooter } from "@components/card/card-footer";
import { Form } from "@components/form/form";
import { Field } from "@components/form/field";
import { Button } from "@components/button/button";

import { useUserAuth } from "@contexts/AuthContext";
import { closeModal } from "@contexts/modal-trigger";
import { InfiniteSpinner } from "@components/infinite-spinner/infinite-spinner";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email format").required("Required"),
	password: Yup.string()
		.min(8, "Passwords must contain at least eight characters")
		.required("This field is required"),
});

const Signup = () => {
	const { signin } = useUserAuth();

	return (
		<Card>
			<CardHeader title="Sign Up" />
			<CardContent>
				<Form
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={async (values, { setSubmitting, setErrors }) => {
						const { email, password } = values;
						await signin(email, password)
							.then((response: any) => {
								return JSON.stringify(response);
							})
							.then((data: any) => {
								closeModal("signup");
							})
							.catch((err: any) => {
								setSubmitting(false);
								const error = err.customData._tokenResponse.error.message;
								setErrors({ email: error });
							});
					}}
				>
					{(formValues) => {
						const { values, errors, dirty, isValid, isSubmitting } = formValues;
						return (
							<>
								{isSubmitting && <InfiniteSpinner />}
								{!isSubmitting && (
									<>
										<Field
											name="email"
											type="email"
											labelText="Email"
											hasIcons="left"
											leftIcon="fa-thin fa-envelope-open"
											formik={formValues}
										>
											<input className="input" />
										</Field>

										<Field
											name="password"
											type="password"
											labelText="Password"
											hasIcons="left"
											leftIcon="fa-thin fa-lock"
											formik={formValues}
										>
											<input className="input" />
										</Field>

										<Button
											type="submit"
											disabled={!isValid || !dirty || isSubmitting}
										>
											Submit
										</Button>
									</>
								)}
							</>
						);
					}}
				</Form>
			</CardContent>
			<CardFooter>
				<p className="card-footer-item">Already have an account? Log in</p>
			</CardFooter>
		</Card>
	);
};

export { Signup };
