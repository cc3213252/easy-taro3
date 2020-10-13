// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量
const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"https://miniapp.you.163.com"'


module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : HOST,
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/dev/api/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/dev/api/': '/'
          },
          changeOrigin: true
        }
      }
    }
  }
}
