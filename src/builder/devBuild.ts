import { webpack } from "../../node_modules/webpack";
import { Page } from "../types/main";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { Options } from "../types/options";

export function startDevBuild(options: Options, pages: Page[]) {
    pages;

    var virtualModules = new VirtualModulesPlugin({
        'main.ts': `import { start } from './src/template/default'; start(JSON.parse('${JSON.stringify(options)}'))`
    });

    const compiler = webpack({
        entry: {
            main: "./main.ts"
        },
        mode: "development",
        resolve: {
            extensions: [ '.js', '.ts' ]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.css$/i,
                    use: [ {
                        loader: MiniCssExtractPlugin.loader
                    }, 'css-loader' ],
                }
            ]
        },
        plugins: [
            virtualModules,
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
            new HtmlWebpackPlugin({
                template: '/src/builder/template.html',
                inject: 'body',
                chunks: [ 'main' ],
            })
        ]
    })

    const dev = new WebpackDevServer(compiler, {
        noInfo: true,
        after: () => {
            console.log(`🏗  We are running ${options.PageTitle} on port 6969`)
        }
    })
    dev.listen(6969);
}
