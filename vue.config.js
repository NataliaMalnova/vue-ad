module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-ad/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ]
}
