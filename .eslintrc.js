module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "es6": true
    },
    "rules": {
        "immutable/no-let": 2,
        "immutable/no-this": 2,
        "immutable/no-mutation": 2,
        "no-console": 0,
        "linebreak-style": 0,
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "immutable"
    ]
};
