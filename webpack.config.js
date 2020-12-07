// webpack.config.js
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  plugins: [
    new Dotenv()
  ],
  entry: '../src/firebase.js',
     output: {
          filename: './bundle.js'
     }
  
};