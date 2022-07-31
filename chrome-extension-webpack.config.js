const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const root = './src/chrome-extension';

module.exports = {
    entry: {
        background: `${root}/background.ts`,
        popup: `${root}/popup.ts`,
        options: `${root}/options.ts`,
        contentScript: {
            import: `${root}/content-script.ts`,
            filename: 'content-script.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [
                    // [ts-loader include section]
                    // Code in `root` can only import other codes in `src/shared`. Can be added more here.
                    path.resolve(__dirname, root),
                    path.resolve(__dirname, 'src/shared'),
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: false,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: `${root}/manifest.json` },
                { from: `./*.html`, context: root },
                { from: `./*.css`, context: root },
            ],
        }),
    ],
    optimization: {
        minimizer: [
            '...', // Use the existing minimizers (`terser-webpack-plugin`).
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    devtool: 'cheap-module-source-map',
};
