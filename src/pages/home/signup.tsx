import React from "react";
import * as Yup from "yup";

import { Card } from "@components/card/card";
import { CardHeader } from "@components/card/card-header";
import { CardContent } from "@components/card/card-content";
import { CardFooter } from "@components/card/card-footer";
import { Form } from "@components/form/form";
import { Field } from "@components/form/field";
import { Button } from "@components/button/button";

const initialValues = {
	email: "",
	password: "",
	password_confirm: "",
};

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email format").required("Required"),
	password: Yup.string()
		.min(8, "Passwords must contain at least eight characters")
		.required("This field is required"),
	password_confirm: Yup.string().when("password", {
		is: (val: string) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf(
			[Yup.ref("password")],
			"Both password need to be the same"
		),
	}),
});

const Signup = () => {
	return (
		<Card>
			<CardHeader title="Sign Up" />
			<CardContent>
				<Form
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						console.log("values ", values);
					}}
				>
					{(formValues) => {
						const { values, errors, dirty, isValid, isSubmitting } = formValues;
						console.log(values, errors, isSubmitting);
						return (
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

								<Field
									name="password_confirm"
									type="password"
									labelText="Confirm Password"
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
