const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
	entry: {
		home: "./src/index.js",
	},

	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "assets/images/[hash][ext][query]",
	},

	resolve: {
		extensions: [".js"],
		alias: {
			"@utils": path.resolve(__dirname, "src/utils/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
			"@images": path.resolve(__dirname, "src/assets/images/"),
			"@components": path.resolve(__dirname, "src/components/"),
		},
	},

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ["postcss-preset-env"],
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					sources: {
						list: [
							{
								attribute: "src",
								type: "src",
								filter: (tag) => {
									return tag.toLowerCase() === "img"
								},
							},
						],
					},
				},
			},

			{
				test: /\.(woff|woff2|ttf)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 10000,
						mimetype: "application/font-woff",
						name: "[name].[contenthash].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "assets/fonts/",
						esModule: false,
					},
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
			filename: "./index.html",
			chunks: ["home"],
		}),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),

		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets", "videos"),
					to: "assets",
				},
			],
		}),

		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets", "images"),
					to: "assets",
				},
			],
		}),

		new FaviconsWebpackPlugin({
			logo: "src/assets/favicon.svg",
			mode: "light",
			devMode: "light",
			cache: true,
			outputPath: "./assets",
			prefix: "assets/",
			inject: true,
		}),

		new CleanWebpackPlugin(),
	],

	optimization: {
		minimizer: true,
		minimizer: [
			new TerserPlugin(),
			// new CssMinimizerPlugin(),
		],
	},
}
