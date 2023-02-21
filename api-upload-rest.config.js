const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  apps: [{
    name: 'api-upload-rest',
    script: './index.js',
  }]
}
