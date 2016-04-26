var UglifyJS = require('uglify-js');

function minify(src, options) {
    options = options || {};
    options.fromString = true;
    return UglifyJS.minify(src, options).code;
}

module.exports = function (lasso, config) {
    lasso.addTransform({
        contentType: 'js',
        name: module.id,
        stream: false,
        transform: function (code, lassoContext) {
            if (lassoContext.dependency && lassoContext.dependency.inline) {
                code = minify(code, config);
            }
            return code;
        }
    });
};
