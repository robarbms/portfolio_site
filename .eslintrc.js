const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "for-direction": "error",
        "no-dupe-else-if": "error",
        "react/no-unescaped-entities": "error",

      // Forked and moved to fb-www/comma-dangle
      'comma-dangle': OFF,
      // equivalent to jshint boss
      'no-cond-assign': OFF,
      // equivalent to jshint devel
      'no-console': [WARNING, {
        allow: ['warn', 'error', 'time', 'timeEnd', 'timeStamp'],
      }],
      // prohibits things like `while (true)`
      'no-constant-condition': OFF,
      // we need to be able to match these
      'no-control-regex': OFF,
      // equivalent to jshint debug
      'no-debugger': ERROR,
      // equivalent to jshint W004
      'no-dupe-args': ERROR,
      // syntax error in strict mode, almost certainly unintended in any case
      'no-dupe-keys': ERROR,
      // almost certainly a bug
      'no-duplicate-case': WARNING,
      // almost certainly a bug
      'no-empty-character-class': WARNING,
      // would warn on uncommented empty `catch (ex) {}` blocks
      'no-empty': OFF,
      // can cause subtle bugs in IE 8, and we shouldn't do this anyways
      'no-ex-assign': WARNING,
      // we shouldn't do this anyways
      'no-extra-boolean-cast': WARNING,
      // parens may be used to improve clarity, equivalent to jshint W068
      'no-extra-parens': [WARNING, 'functions'],
      // equivalent to jshint W032
      'no-extra-semi': WARNING,
      // a function delaration shouldn't be rewritable
      'no-func-assign': ERROR,
      // babel and es6 allow block-scoped functions
      'no-inner-declarations': OFF,
      // will cause a runtime error
      'no-invalid-regexp': WARNING,
      // disallow non-space or tab whitespace characters
      'no-irregular-whitespace': WARNING,
      // will cause a runtime error
      'no-obj-calls': ERROR,
      // improves legibility
      'no-regex-spaces': WARNING,
      // equivalent to jshint elision
      'no-sparse-arrays': ERROR,
      // equivalent to jshint W027
      'no-unreachable': ERROR,
      // equivalent to jshint use-isnan
      'use-isnan': ERROR,
      // equivalent to jshint notypeof
      'valid-typeof': ERROR,
      // we already require semicolons
      'no-unexpected-multiline': OFF,

      // Best Practices <http://eslint.org/docs/rules/#best-practices>

      // probably a bug, we shouldn't actually even use this yet, because of IE8
      'accessor-pairs': [WARNING, {setWithoutGet: true}],
      // probably too noisy ATM
      'block-scoped-var': OFF,
      // cyclomatic complexity, we're too far gone
      'complexity': OFF,
      // require return statements to either always or never specify values
      'consistent-return': WARNING,
      // style guide: Always use brackets, even when optional.
      'curly': [WARNING, 'all'],
      // we don't do this/care about this
      'default-case': OFF,
      // disabled in favor of our temporary fork
      'dot-notation': OFF,
      // we don't do this/care about this, but probably should eventually
      'dot-location': OFF,
      // disabled as it's too noisy ATM
      'eqeqeq': [OFF, 'allow-null'],
      // we don't do this/care about this, equivalent to jshint forin
      'guard-for-in': OFF,
      // we have too many internal examples/tools using this
      'no-alert': OFF,
      // incompatible with 'use strict' equivalent to jshint noarg
      'no-caller': ERROR,
      // we don't care about this right now, but might later
      'no-case-declarations': OFF,
      // we don't do this/care about this
      'no-div-regex': OFF,
      // we don't do this/care about this
      'no-else-return': OFF,
      // avoid mistaken variables when destructuring
      'no-empty-pattern': WARNING,
      // see eqeqeq: we explicitly allow this, equivalent to jshint eqnull
      'no-eq-null': OFF,
      // equivalent to jshint evil
      'no-eval': ERROR,
      // should only be triggered on polyfills, which we can fix case-by-case
      'no-extend-native': WARNING,
      // might be a sign of a bug
      'no-extra-bind': WARNING,
      // equivalent to jshint W089
      'no-fallthrough': WARNING,
      // equivalent to jshint W008
      'no-floating-decimal': ERROR,
      // implicit coercion is often idiomatic
      'no-implicit-coercion': OFF,
      // equivalent to jshint evil/W066
      'no-implied-eval': ERROR,
      // will likely create more signal than noise
      'no-invalid-this': OFF,
      // babel should handle this fine
      'no-iterator': OFF,
      // Should be effectively equivalent to jshint W028 - allowing the use
      // of labels in very specific situations. ESLint no-empty-labels was
      // deprecated.
      'no-labels': [ERROR, {allowLoop: true, allowSwitch: true}],
      // lone blocks create no scope, will ignore blocks with let/const
      'no-lone-blocks': WARNING,
      // equivalent to jshint loopfunc
      'no-loop-func': OFF,
      // we surely have these, don't bother with it
      'no-magic-numbers': OFF,
      // we may use this for alignment in some places
      'no-multi-spaces': OFF,
      // equivalent to jshint multistr, consider using es6 template strings
      'no-multi-str': ERROR,
      // equivalent to jshint evil/W054
      'no-new-func': ERROR,
      // don't use constructors for side-effects, equivalent to jshint nonew
      'no-new': WARNING,
      // very limited uses, mostly in third_party
      'no-new-wrappers': WARNING,
      // deprecated in ES5, but we still use it in some places
      'no-octal-escape': WARNING,
      // deprecated in ES5, may cause unexpected behavior
      'no-octal': WARNING,
      // treats function parameters as constants, probably too noisy ATM
      'no-param-reassign': OFF,
      // deprecated in ES3.WARNING, equivalent to jshint proto
      'no-proto': ERROR,
      // jshint doesn't catch this, but this is inexcusable
      'no-redeclare': WARNING,
      // equivalent to jshint boss
      'no-return-assign': OFF,
      // equivalent to jshint scripturl
      'no-script-url': ERROR,
      // not in jshint, but is in jslint, and is almost certainly a mistake
      'no-self-compare': WARNING,
      // there are very limited valid use-cases for this
      'no-sequences': WARNING,
      // we're already pretty good about this, and it hides stack traces
      'no-throw-literal': ERROR,
      // breaks on `foo && foo.bar()` expression statements, which are common
      'no-unused-expressions': OFF,
      // disallow unnecessary .call() and .apply()
      'no-useless-call': WARNING,
      // disallow concatenating string literals
      'no-useless-concat': WARNING,
      // this has valid use-cases, eg. to circumvent no-unused-expressions
      'no-void': OFF,
      // this journey is 1% finished (allow TODO comments)
      'no-warning-comments': OFF,
      // equivalent to jshint withstmt
      'no-with': OFF,
      // require radix argument in parseInt, we do this in most places already
      'radix': WARNING,
      // we don't do this/care about this
      'vars-on-top': OFF,
      // equivalent to jshint immed
      'wrap-iife': OFF,
      // probably too noisy ATM
      'yoda': OFF,

      // Strict Mode <http://eslint.org/docs/rules/#strict-mode>
      // jshint wasn't checking this, and the compiler should add this anyways
      'strict': OFF,

      // Variables <http://eslint.org/docs/rules/#variables>
      // we don't do this/care about this
      'init-declarations': OFF,
      // equivalent to jshint W051, is a strict mode violation
      'no-delete-var': ERROR,
      // we should avoid labels anyways
      'no-label-var': WARNING,
      // redefining undefined, NaN, Infinity, arguments, and eval is bad, mkay?
      'no-shadow-restricted-names': WARNING,
      // a definite code-smell, but probably too noisy
      'no-shadow': OFF,
      // it's nice to be explicit sometimes: `let foo = undefined;`
      'no-undef-init': OFF,
      // equivalent to jshint undef, turned into an error in getConfig
      'no-undef': WARNING,
      // using undefined is safe because we enforce no-shadow-restricted-names
      'no-undefined': OFF,
      // equivalent to jshint unused
      'no-unused-vars': [WARNING, {args: 'none', varsIgnorePattern: '^_'}],
      // too noisy
      'no-use-before-define': OFF,

      // Stylistic Issues <http://eslint.org/docs/rules/#stylistic-issues>
      // See also: https://our.intern.facebook.com/intern/dex/style-guide/
      'array-bracket-spacing': WARNING,
      // TODO: enable this with consensus on single line blocks
      'block-spacing': OFF,
      'brace-style': [WARNING, '1tbs', {allowSingleLine: true}],
      // too noisy at the moment, and jshint didn't check it
      'camelcase': [OFF, {properties: 'always'}],
      'comma-spacing': [WARNING, {before: false, after: true}],
      // jshint had laxcomma, but that was against our style guide
      'comma-style': [WARNING, 'last'],
      'computed-property-spacing': [WARNING, 'never'],
      // we may use more contextually relevant names for this than self
      'consistent-this': [OFF, 'self'],
      // should be handled by a generic TXT linter instead
      'eol-last': OFF,
      'func-names': OFF,
      // too noisy ATM
      'func-style': [OFF, 'declaration'],
      // no way we could enforce min/max lengths or patterns for vars
      'id-length': OFF,
      'id-match': OFF,
      // we weren't enforcing this with jshint, so erroring would be too noisy
      'indent': [WARNING, INDENT_SIZE, {SwitchCase: 1}],
      // we use single quotes for JS literals, double quotes for JSX literals
      'jsx-quotes': [WARNING, 'prefer-double'],
      // we may use extra spaces for alignment
      'key-spacing': [OFF, {beforeColon: false, afterColon: true}],
      'keyword-spacing': [WARNING],
      'lines-around-comment': OFF,
      // should be handled by a generic TXT linter instead
      'linebreak-style': [OFF, 'unix'],
      'max-depth': OFF,
      'max-len': [WARNING, 80, INDENT_SIZE,
        {'ignorePattern': maxLenIgnorePattern, 'ignoreUrls': true},
      ],
      'max-nested-callbacks': OFF,
      'max-params': OFF,
      'max-statements': OFF,
      // https://facebook.com/groups/995898333776940/1027358627297577
      'new-cap': OFF,
      // equivalent to jshint W058
      'new-parens': ERROR,
      'no-array-constructor': ERROR,
      'no-bitwise': WARNING,
      'no-continue': OFF,
      'no-inline-comments': OFF,
      // doesn't play well with `if (__DEV__) {}`
      'no-lonely-if': OFF,
      // stopgap, irrelevant if we can eventually turn `indent` on to error
      'no-mixed-spaces-and-tabs': ERROR,
      // don't care
      'no-multiple-empty-lines': OFF,
      'no-negated-condition': OFF,
      // we do this a bunch of places, and it's less bad with proper indentation
      'no-nested-ternary': OFF,
      // similar to FacebookWebJSLintLinter's checkPhpStyleArray
      'no-plusplus': OFF,
      'no-restricted-syntax': OFF,
      'no-ternary': OFF,
      // should be handled by a generic TXT linter instead
      'no-trailing-spaces': OFF,
      // we use this for private/protected identifiers
      'no-underscore-dangle': OFF,
      // disallow `let isYes = answer === 1 ? true : false;`
      'no-unneeded-ternary': WARNING,
      // too noisy ATM
      'object-curly-spacing': OFF,
      // makes indentation warnings clearer
      'one-var': [WARNING, {initialized: 'never'}],
      // prefer `x += 4` over `x = x + 4`
      'operator-assignment': [WARNING, 'always'],
      // equivalent to jshint laxbreak
      'operator-linebreak': OFF,
      'padded-blocks': OFF,
      // probably too noisy on pre-ES5 code
      'quote-props': [OFF, 'as-needed'],
      'quotes': [
        WARNING,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'semi-spacing': [WARNING, {before: false, after: true}],
      // equivalent to jshint asi/W032
      'semi': [WARNING, 'always'],
      'sort-vars': OFF,
      // require `if () {` instead of `if (){`
      'space-before-blocks': [WARNING, 'always'],
      // require `function foo()` instead of `function foo ()`
      'space-before-function-paren': [
        WARNING,
        {anonymous: 'never', named: 'never'},
      ],
      // incompatible with our legacy inline type annotations
      'space-in-parens': [OFF, 'never'],
      'space-infix-ops': [WARNING, {int32Hint: true}],
      'space-unary-ops': [WARNING, {words: true, nonwords: false}],
      // TODO: Figure out a way to do this that doesn't break typechecks
      // or wait for https://github.com/eslint/eslint/issues/2897
      'spaced-comment':
        [OFF, 'always', {exceptions: ['jshint', 'jslint', 'eslint', 'global']}],
      'wrap-regex': OFF,

      // ECMAScript 6 <http://eslint.org/docs/rules/#ecmascript-6>
      'arrow-body-style': OFF,
      // Forked to fb-www/arrow-parens to fix issues with flow and add fixer
      'arrow-parens': OFF,
      // tbgs finds *very few* places where we don't put spaces around =>
      'arrow-spacing': [WARNING, {before: true, after: true}],
      // violation of the ES6 spec, won't transform
      'constructor-super': ERROR,
      // https://github.com/babel/babel-eslint#known-issues
      'generator-star-spacing': OFF,
      'no-class-assign': WARNING,
      'no-confusing-arrow': OFF,
      // this is a runtime error
      'no-const-assign': ERROR,
      'no-dupe-class-members': ERROR,
      // violation of the ES6 spec, won't transform, `this` is part of the TDZ
      'no-this-before-super': ERROR,
      'no-useless-computed-key': WARNING,
      // we have way too much ES3 & ES5 code
      'no-var': OFF,
      'object-shorthand': OFF,
      'prefer-const': OFF,
      'prefer-spread': OFF,
      // we don't support/polyfill this yet
      'prefer-template': OFF,
      // there are legitimate use-cases for an empty generator
      'require-yield': OFF,


      // eslint-plugin-react <https://github.com/yannickcr/eslint-plugin-react>
      // TODO: We're being extremely conservative here as we roll out eslint on
      // www. As we finish rollout, we can turn on more of these, and replace
      // some legacy regex rules in the process.
      'react/display-name': OFF,
      'react/forbid-prop-types': OFF,
      'react/jsx-boolean-value': OFF,
      'react/jsx-closing-bracket-location': OFF,
      'react/jsx-curly-spacing': OFF,
      'react/jsx-equals-spacing': WARNING,
      'react/jsx-filename-extension': OFF,
      'react/jsx-first-prop-new-line': OFF,
      'react/jsx-handler-names': OFF,
      'react/jsx-indent': OFF,
      'react/jsx-indent-props': OFF,
      'react/jsx-key': OFF,
      'react/jsx-max-props-per-line': OFF,
      'react/jsx-no-bind': OFF,
      'react/jsx-no-duplicate-props': ERROR,
      'react/jsx-no-literals': OFF,
      'react/jsx-no-target-blank': OFF,
      'react/jsx-no-undef': ERROR,
      'react/jsx-pascal-case': OFF,
      'react/jsx-sort-props': OFF,
      // forked to fb-www/jsx-uses-react
      'react/jsx-uses-react': OFF,
      'react/jsx-uses-vars': ERROR,
      'react/jsx-wrap-multilines': OFF,
      'react/no-danger': OFF,
      'react/no-deprecated': OFF,
      'react/no-did-mount-set-state': OFF,
      'react/no-did-update-set-state': OFF,
      'react/no-direct-mutation-state': OFF,
      'react/no-is-mounted': WARNING,
      'react/no-multi-comp': OFF,
      'react/no-render-return-value': OFF,
      'react/no-set-state': OFF,
      'react/no-string-refs': OFF,
      'react/no-unknown-property': OFF,
      'react/prefer-es6-class': OFF,
      'react/prefer-stateless-function': OFF,
      'react/prop-types': OFF,
      // forked to fb-www/react-in-jsx-scope
      'react/react-in-jsx-scope': OFF,
      'react/require-optimization': OFF,
      'react/require-render-return': OFF,
      'react/self-closing-comp': OFF,
      'react/sort-comp': OFF,
      'react/sort-prop-types': OFF,
    }
}
