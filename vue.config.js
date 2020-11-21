// 这里面是commonjs规范  不是es6
// webapck是基于commonjs规范的
// 配置完vue.config.js后，一定一定要重启服务器
module.exports = {
    // 通过代理解决跨域  真实项目中，使用代理解决跨域多一点
    devServer:{
        // 代理：proxy后面是目的服务器的地址
        proxy:"http://localhost:8888"
    }
}











