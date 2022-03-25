import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Form as FormikForm } from "./example-form";

export default {
	title: "Components/Form",
	component: FormikForm,
} as ComponentMeta<typeof FormikForm>;

// You may want to demonstrate a library of your custom-made fields

export const Form = () => <FormikForm />;
