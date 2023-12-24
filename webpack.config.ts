import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
resolve: {
  // modules: [path.resolve('./public/galleries'), "galleries"]
  alias: {
    galleries: path.resolve(__dirname, "public/galleries/")
  }
}
};

export default config;