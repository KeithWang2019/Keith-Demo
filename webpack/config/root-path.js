const path = require('path');
const rootPath = path.resolve(__dirname, '../..');

module.exports = {
    getPath: function (...child) {
        return path.resolve(rootPath, ...child);
    },
    root: rootPath
}