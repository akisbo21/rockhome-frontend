const config = {
  "transpileDependencies": [
    "vuetify"
  ],
  filenameHashing : false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: {
    extract: true
  }
}


if (process.env.NODE_ENV === 'development') {
  config.publicPath = "/";
  config.devServer = {
    "port" : "8100",
    disableHostCheck: true
  }
}




if (!process.env.VUE_APP_ROCK_BACKEND) {
  console.error('Kotelezo valtozo: process.env.VUE_APP_ROCK_BACKEND')
  process.exit()
}


module.exports = config