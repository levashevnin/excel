/* eslint-disable no-undef */
/* eslint-disable max-len */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// eslint-disable-next-line max-len
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // складывать все css файлы в один файл в папку dist
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production'
    isDev = !isProd

    const filename = (ext) => isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`

    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ],
            }),
            new MiniCssExtractPlugin({
                filename: filename('css')
            }),
        ]
        if (isDev) {
            base.push(new ESLintPlugin())
        }
        return base
    }

    return {
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: ['@babel/polyfill', './index.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true
        },
        resolve: {
            extensions: ['.js', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src', 'core'),
            }
        },
        devServer: {
            port: '3000',
            open: true,
            hot: true,
            watchFiles: './'
        },
        devtool: isDev ? 'source-map' : false,
        plugins: plugins(),
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [

                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        }
    }
}
