const {
	override,
	addDecoratorsLegacy,
	disableEsLint,
	addBundleVisualizer,
	addWebpackAlias,
	adjustWorkbox,
	overrideDevServer,
	addWebpackModuleRule,
	addBabelPlugins,
} = require("customize-cra");
const path = require("path");

module.exports = {
	webpack: override(
		// add an alias for "ag-grid-react" imports
		addWebpackAlias({
			"@components": path.resolve(__dirname, "src/components/"),
			"@tools": path.resolve(__dirname, "src/tools/"),
			"@contexts": path.resolve(__dirname, "src/contexts/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
		})
	),
};
