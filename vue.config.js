const path = require('path');
 
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports={
  publicPath: './',
  // devServer:{
  //   disableHostCheck:false,
  //   host:"127.0.0.1",
  //   port:8082,
  //   https:false,
  //   hotOnly:false,
  //   Proxy:null
  // }
}