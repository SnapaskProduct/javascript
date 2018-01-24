# eslint-config-migme

This package provides snapask's .eslintrc as an extensible shared config

## Usage

### eslint-config-snapask

Our default export contains all of our ESLint rules, including EcmaScript 6+.
It requires `eslint`.

1. `npm install --save-dev eslint-config-snapask eslint-plugin-react eslint`
2. add `"extends": "snapask"` to your .eslintrc

> note that "snapask"

### eslint-config-snapask/base

Lints ES6+ but does not lint React.
It requires `eslint`.

1. `npm install --save-dev eslint-config-snapask eslint`
2. add `"extends": "snapask/base"` to your .eslintrc

### eslint-config-snapask/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-snapask eslint`
2. add `"extends": "snapask /legacy"` to your .eslintrc
