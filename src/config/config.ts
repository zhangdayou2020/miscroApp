import { defineConfig } from '@umijs/max';
/*
  .umirc.ts 文件或者config/config.ts 这两个文件功能是一致的
  仅仅是存在的目录不同
  二选一 .umirc.ts 优先级比较高
*/

/*
  alias 配置别名
  对import语句的source做映射
  alias的值 最好使用绝对路径
  尤其是指向依赖时 要使用require.resolve
  {
    alias:{
      services:resolve(_dirname, './src/services'),
    }
  }
*/

/*
  chainWebpack
  为了扩展Umi内部的webpack配置
  提供了链式编程的方式来修改webpack配置 
  chainWebpack(memo,args){
    return memo
  }

  华泰写的配置

  memo 是现有webpack 的配置
  args 包含一些额外新的和辅助对象 目前有 env  webpack
  env 为当前环境值  development 和 production
  webpack 为webpack对象 可以从中获取webpack内置插件

  chainWebpack（config,{env,webpack,createCSSRule}){
    // 配置pdf loader
    config.module
    .rule('pdf')
    .test(/\.pdf)
    .use('pdfloader')
    .loader('file-loader')
    .options({});
    config.plugin('bundle-analyze').use(HtBundleAnalyzerPlugin)

  }
*/

/*
  hash 
  开启hash 模式 
  让build之后的产物包含hash后缀 通常用于增量发布和避免浏览器加载缓存

  华泰这个地方也写了
  +dist
   -logo.sw892d.png
   umi.dis223.js
   index.html
  HTML 文件使用没有hash后缀
*/

/*
  history
  类型{
    type:'broswer' | 'hash'| 'memory'
  }
  设置路由 history 类型  华泰写的是 hash
  history:{type:'hash'}

*/

/*
  ignoreMemomentLocal
  忽略moment的locale 文件 用于减少产物的尺寸
  默认的打开的
  华泰也是 写的true
*/

/*
  proxy 
  配置代理功能
  华泰是写了一个方法 
  const serverProxy = ()=>{
    const proxy = {}
    [
      'ione/apiproxy/',
      'ione/cust/',
      'ione/shield/',
      'ione/project/',
      'ione/product/',
      'ione/operation/',
    ].forEach((item)=>{
      proxy[item] = {
        target:
        process.env.APP_ENV === 'sit'
        ?"http://168.61.17.11:8082"
        :"http://168.61.10.40:8082",
        changeOrigin:false,
      }
    })
  }

*/


/*
  targets

  配置需要兼容的浏览器最低版本
  Umi会根据这个自定引入polyfill 配置autoprefixed和做语法转换
  华泰写的 兼容 ie9
  targets：{
    ie: 9
  }

*/

/*
 dva 
 dva:{
  如果需要兼容IE11  默认是false  启动immer 以方便修改reducer
  immer:{enableES5:true},
  hmr:true
 }
*/
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    // 显示在布局左上角的产品名
    title: '投行云平台',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
