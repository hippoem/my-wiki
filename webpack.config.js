const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // ใช้ Regular Expression ทดสอบ ถ้าไฟล์ไหนลงท้ายด้วย js หรือ jsx
        // ให้ใช้ babel-loader
        test: /\.(js|jsx)$/,
        
        // ไม่รวม node_modules เนื่องจากเป็นของที่คนอื่นเขียน
        // เราไม่ต้องใส่ใจ
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ],
  }
};