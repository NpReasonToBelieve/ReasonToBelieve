import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "./nav";
import { NavbarDropdown } from "./subcomponents/navbar-dropdown";
import { Button } from "../../components/button/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Nav",
	component: Navbar,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Nav = Template.bind({});

Nav.args = {
	brandImage: (
		<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
	),
	navStartItems: [
		<a className="navbar-item">Home</a>,

		,
		<a className="navbar-item">Documentation</a>,
		<NavbarDropdown
			parentText="More"
			items={[
				<a className="navbar-item">About</a>,
				<a className="navbar-item">Jobs</a>,
				<a className="navbar-item">Contact</a>,
				<hr className="navbar-divider" />,
				<a className="navbar-item">Report an issue</a>,
			]}
		/>,
	],
	navEndItems: [
		<div className="buttons">
			<Button>Signup</Button>
			<Button>Login</Button>
		</div>,
	],
};
