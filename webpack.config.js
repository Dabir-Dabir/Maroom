const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

    const {mode = "development"} = env;
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
        ];
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css'
                })
            );
        }

        return plugins;
    };

    return {
        mode: isProd ? "production" : isDev && "development",

        module: {
            rules: [
                {
                    test: /\.js/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },

                // Loading images
                {
                    test: /\.(png|jpeg|jpg|gif|ico)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }],
                },

                // Loading SVG
                {
                    test: /\.svg$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "react-svg-loader",
                            options: {
                                svgo: {
                                    plugins: [
                                        { removeTitle: false }
                                    ],
                                    floatPrecision: 2
                                }
                            }
                        }
                    ]
                },

                // Loading fonts
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }]
                },

                // Loading CSS
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },

                // Loading SCSS
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoaders(), "sass-loader"]
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true
        }
    };
};