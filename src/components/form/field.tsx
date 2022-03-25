import React, { ReactElement, ReactNode } from "react";
import { FormikProps } from "formik";
import clsx from "clsx";

import { Label } from "./form-elements/label";
import { Icon } from "../icon/icon";

interface FormValues {
	name: string;
}

type Props = {
	labelText: string | ReactNode;
	name: string;
	formik: any;
	hasIcons?: "left" | "right" | "both";
	leftIcon?: string;
	rightIcon?: string;
	type: string;
	children: ReactElement;
};

const Field = ({
	formik,
	name,
	type,
	labelText,
	hasIcons,
	leftIcon,
	rightIcon,
	children,
}: Props) => {
	const containerClasses = clsx({
		"has-icons-left": hasIcons === "left",
		"has-icons-right": hasIcons === "right",
		"has-icons-left has-icons-right": hasIcons === "both",
	});

	const typeIsInput =
		type === "text" ||
		type === "password" ||
		type === "email" ||
		type === "tel";

	const hasErrorClasses = clsx(`${type}`, {
		input: typeIsInput,
		textarea: type === "textarea",
	});

	const { values }: any = formik;

	const FormElement = React.cloneElement(children, {
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		value: values[`${name}`],
		className: hasErrorClasses,
		id: name,
		name: name,
		type,
	});
	const { touched, errors } = formik;

	return (
		<div className="field">
			<Label text={labelText} htmlFor={name} />
			<div className={`control ${containerClasses}`}>
				{FormElement}
				{type !== "textarea" && hasIcons && (
					<>
						<Icon leftIcon={leftIcon} rightIcon={rightIcon} align={hasIcons} />
					</>
				)}
				{touched[name] && errors[name] ? (
					<div className="help is-danger">{errors[name]}</div>
				) : null}
			</div>
		</div>
	);
};

export { Field };
