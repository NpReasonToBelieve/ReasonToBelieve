import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/button/button";

import { Field } from "./field";

const initialValues = {
	name: "",
	email: "",
	channel: "",
};

const onSubmit = (values: any) => {
	console.log("Form data", values);
};

const validate = (values: any) => {
	let errors = {} as any;
	//errors is an object which stores values like values.name, values.email, vlaues.channel as keys and if they are empty or not up to mark, it returns errors

	if (!values.name) {
		errors.name = "Required";
	}
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Invalid Email format";
	}
	if (!values.channel) {
		errors.channel = "Required";
	}

	return errors;
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email format").required("Required"),
	channel: Yup.string().required("Required"),
});

function Form() {
	//this helps in managing form state, handling form submission and validation and error message
	const formik = useFormik({
		// hellps us manage the form state
		initialValues,
		onSubmit,
		validationSchema,
		validate,
	});

	// console.log("Form values", formik.values);

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<Field
					name="email"
					type="email"
					labelText="Email"
					hasIcons="left"
					leftIcon="fa-thin fa-envelope-open"
					formik={formik}
				>
					<input className="input" />
				</Field>

				<Field
					name="name"
					type="text"
					labelText="First Name"
					hasIcons="left"
					leftIcon="fa-thin fa-user"
					formik={formik}
				>
					<input className="input" />
				</Field>

				<Field
					name="users"
					type="textarea"
					labelText="Family"
					hasIcons="left"
					leftIcon="fa-thin fa-users"
					formik={formik}
				>
					<textarea />
				</Field>

				<Button
					type="submit"
					buttonType="primary"
					disabled={
						formik.isSubmitting ||
						!!(formik.errors.email && formik.touched.email) ||
						!!(formik.errors.name && formik.touched.name)
					}
				>
					Submit
				</Button>
			</form>
		</div>
	);
}

export { Form };
