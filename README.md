# Deprecated
Lasso.js has incorporated the functionality of this plugin in both v1 and v2 as of [1.18.0](https://github.com/lasso-js/lasso/releases/tag/v1.18.0) and [2.3.0](https://github.com/lasso-js/lasso/releases/tag/v2.3.0).

# lasso-minify-inline-js

[Lasso.js](https://github.com/lasso-js/lasso) plugin to minify inline javascript using
[UglifyJS](https://github.com/mishoo/UglifyJS2).


## Installation

```sh
npm install lasso-minify-inline-js --save
```

## Motivation

In some cases it may be useful to only minify the inline resources. For example if your main resources are minified
through some external process like a CDN, you may want to handle the inline resources separately. This serves
as a simple solution to that problem (see https://github.com/lasso-js/lasso/issues/84).

## Usage

This plugin can be included through Lasso configuration. You would normally only enable this plugin when the
default Lasso.js minifier is disabled, since otherwise both minification transforms will execute. [UglifyJS](https://github.com/mishoo/UglifyJS2) options can be passed through `config`.
The relevant portion of configuration should look something like this:

```json
{
    "plugins": [
        {
            "plugin": "lasso-minify-inline-js",
            "config": {
                "mangle": false
            }
        }
    ],
    "minify": false
}
```
