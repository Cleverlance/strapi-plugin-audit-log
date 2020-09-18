const pluginPkg = require('../../package.json');
const pluginId = pluginPkg.name.split('strapi-plugin-')[1]

module.exports = pluginId;
