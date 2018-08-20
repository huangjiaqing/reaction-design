import path from 'path';

export default {

  extraBabelPlugins: [
    [
      "import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ],

  alias: {
    assets: path.resolve(__dirname, "./src/assets"),
    components: path.resolve(__dirname, "./src/components"),
    config: path.resolve(__dirname, "./src/config"),
    layouts: path.resolve(__dirname, "./src/layouts"),
    models: path.resolve(__dirname, "./src/models"),
    routes: path.resolve(__dirname, "./src/routes"),
    services: path.resolve(__dirname, "./src/services"),
    utils: path.resolve(__dirname, "./src/utils"),
  },

  env: {

    development: {

      publicPath: '/',

      extraBabelPlugins: ["dva-hmr"],

      devTool: 'cheap-eval-source-map',

      proxy: {
        // "/a": {
        //   "target": "http://192.168.1.163:8080",
        //   "changeOrigin": true
        // }      proxy: {
        // "/a": {
        //   "target": "http://192.168.1.163:8080",
        //   "changeOrigin": true
        // }
      },

    },

    production: {

      publicPath: '/',

      devTool: 'source-map',

      // entry: {
      //   app: [
      //     './src/index.js',
      //     './src/index.css'
      //   ],
      // },

      html: {
        // template: './public/index.ejs',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      },

      hash: true,
    }
  },

};
