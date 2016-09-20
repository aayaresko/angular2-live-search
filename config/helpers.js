var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    var result = path.join.apply(path, [_root].concat(args));
    return result;
}

exports.root = root;