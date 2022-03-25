import React from "react";
import type { FormikConfig, FormikProps, FormikValues } from "formik";
import { Formik } from "formik";

type FormProps<Values> = Pick<
	FormikConfig<Values>,
	| "initialValues"
	| "validate"
	| "onSubmit"
	| "onReset"
	| "validateOnChange"
	| "validateOnMount"
	| "validationSchema"
	| "enableReinitialize"
> & {
	/**
	 * React child render callback
	 * Similar to the `children` prop on base `<Formik/>` component but doesn't support plain non-render prop children.
	 */
	children: (
		props: Omit<FormikProps<Values>, "handleReset" | "handleSubmit">
	) => React.ReactNode;
	/** Optional classname to be applied to the form container */
	className?: string;
};

function Form<Values extends FormikValues = FormikValues>({
	className = undefined,
	initialValues,
	validate = undefined,
	validationSchema = undefined,
	validateOnChange = true,
	validateOnMount = false,
	onReset = undefined,
	onSubmit,
	children,
	...restProps
}: FormProps<Values>) {
	const onResetProp = onReset ? { onReset } : {};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validate={validate}
				validationSchema={validationSchema}
				validateOnChange={validateOnChange}
				validateOnMount={validateOnMount}
				onSubmit={onSubmit}
				{...onResetProp}
				{...restProps}
			>
				{({ handleSubmit, handleReset, ...rest }) => (
					<form
						className={className}
						onSubmit={handleSubmit}
						onReset={handleReset}
					>
						{children({
							...rest,
						})}
					</form>
				)}
			</Formik>
		</>
	);
}

export { Form };
