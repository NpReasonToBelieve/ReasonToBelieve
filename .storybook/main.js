const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app",
	],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push(
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				include: path.resolve(__dirname, "../src/styles/"),
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				include: path.resolve(__dirname, "../src/img/"),
				use: [
					{
						loader: "file-loader",
					},
				],
			}
		);

		config.plugins.push(new MiniCssExtractPlugin({ filename: "[name].css" }));

		// Return the altered config
		return config;
	},
};
