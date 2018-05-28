var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

var webpackConfig = {
  context: __dirname, // to automatically find tsconfig.json
  // entry: './src/main.js',
  entry: {
    main: './src/main.js'
    //  ,app: './src/App.vue'
  },
  output: {
    // 出口文件
    path: path.resolve(__dirname, 'dist/js'), // 出口文件位置
    filename: '[name].js' // 出口文件名，name就是entry的键名
  },
  extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/ | /\.vue$/ | /\.tsx?$/,
        loader: 'ts-loader && vue-loader',

        include: [resolve('src'), resolve('test')],
        exports: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          vueLoaderConfig
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      vue: true
    })
  ],

  devServer: {
    // 配置此静态文件服务器，可以用来预览打包后项目
    contentBase: path.resolve(__dirname, 'dist'), // 开发服务运行时的文件根目录
    host: 'localhost', // 主机地址
    port: 9090, // 端口号
    compress: true // 开发服务器是否启动gzip等压缩
  }
}

