module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    // '@typescript-eslint/no-unsafe-member-access': 'error',
    // '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/require-await': 'error',

    // Possible Errors (overrides from recommended set)
    // "no-extra-parens": 'error',
    "no-unexpected-multiline": 'error',
    // All JSDoc comments must be valid
    "valid-jsdoc": [ 'error', {
        "requireReturn": false,
        "requireReturnDescription": false,
        "requireParamDescription": true,
        "prefer": {
            "return": "returns"
        }
    }],

    // Best Practices

    // Allowed a getter without setter, but all setters require getters
    "accessor-pairs": [ 'error', {
        "getWithoutSet": false,
        "setWithoutGet": true
    }],
    "block-scoped-var": 'warn',
    "consistent-return": 'error',
    "curly": 'error',
    "default-case": 'warn',
    // the dot goes with the property when doing multiline
    "dot-location": [ 'warn', "property" ],
    "dot-notation": 'warn',
    "eqeqeq": [ 'error', "smart" ],
    "guard-for-in": 'warn',
    "no-alert": 'error',
    "no-caller": 'error',
    "no-case-declarations": 'warn',
    "no-div-regex": 'warn',
    "no-else-return": 'warn',
    "no-empty-pattern": 'warn',
    "no-eq-null": 'warn',
    "no-eval": 'error',
    "no-extend-native": 'error',
    "no-extra-bind": 'warn',
    "no-floating-decimal": 'warn',
    "no-implicit-coercion": [ 'warn', {
        "boolean": true,
        "number": true,
        "string": true
    }],
    "no-implied-eval": 'error',
    "no-invalid-this": 'error',
    "no-iterator": 'error',
    "no-labels": 'warn',
    "no-lone-blocks": 'warn',
    "no-loop-func": 'error',
    // "no-magic-numbers": 'warn',
    "no-multi-spaces": 'error',
    "no-multi-str": 'warn',
    "no-native-reassign": 'error',
    "no-new-func": 'error',
    "no-new-wrappers": 'error',
    "no-new": 'error',
    "no-octal-escape": 'error',
    "no-param-reassign": 'error',
    "no-process-env": 'warn',
    "no-proto": 'error',
    "no-redeclare": 'error',
    "no-return-assign": 'error',
    "no-script-url": 'error',
    "no-self-compare": 'error',
    "no-throw-literal": 'error',
    "no-unused-expressions": 'error',
    "no-useless-call": 'error',
    "no-useless-concat": 'error',
    "no-void": 'warn',
    // Produce warnings when something is commented as TODO or FIXME
    "no-warning-comments": [ 'warn', {
        "terms": [ "TODO", "FIXME" ],
        "location": "start"
    }],
    "no-with": 'warn',
    "radix": 'warn',
    "vars-on-top": 'error',
    // Enforces the style of wrapped functions
    "wrap-iife": [ 'error', "outside" ],
    "yoda": 'error',

    // Strict Mode - for ES6, never use strict.
    "strict": [ 'error', "never" ],

    // Variables
    "no-catch-shadow": 'warn',
    "no-delete-var": 'error',
    "no-label-var": 'error',
    "no-shadow-restricted-names": 'error',
    "no-shadow": 'warn',
    // We require all vars to be initialized (see init-declarations)
    // If we NEED a var to be initialized to undefined, it needs to be explicit
    "no-undef-init": 'off',
    "no-undef": 'off',
    "no-undefined": 'off',
    "no-unused-vars": 'warn',
    // Disallow hoisting - let & const don't allow hoisting anyhow
    // "no-use-before-define": 'error',

    // Node.js and CommonJS
    "callback-return": [ 'warn', [ "callback", "next" ]],
    "global-require": 'error',
    "handle-callback-err": 'warn',
    "no-mixed-requires": 'warn',
    "no-new-require": 'error',
    // Use path.concat instead
    "no-path-concat": 'error',
    "no-process-exit": 'error',
    "no-restricted-modules": 'off',
    "no-sync": 'warn',

    // ECMAScript 6 support
    // "arrow-body-style": [ 'error', "always" ],
    "arrow-parens": [ 'error', "always" ],
    "arrow-spacing": [ 'error', { "before": true, "after": true }],
    "constructor-super": 'error',
    "generator-star-spacing": [ 'error', "before" ],
    "no-class-assign": 'error',
    "no-const-assign": 'error',
    "no-dupe-class-members": 'error',
    "no-this-before-super": 'error',
    "no-var": 'warn',
    "object-shorthand": [ 'warn', "never" ],
    "prefer-arrow-callback": 'warn',
    "prefer-spread": 'warn',
    "prefer-template": 'warn',
    "require-yield": 'error',
  },
};
