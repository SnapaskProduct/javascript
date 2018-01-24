module.exports = {
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/display-name': [0, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [0, 'never', { allowMultiline: true }],
    'react/jsx-handler-names': [0, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': [0, { maximum: 1 }],
    'react/jsx-no-bind': [2, {
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowBind: false,
    }],
    'react/jsx-no-duplicate-props': [0, { ignoreCase: false }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-sort-props': [0, {
      ignoreCase: false,
      callbacksLast: true,
      shorthandFirst: true,
    }],

    /**
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 0,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-set-state': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': 2,
    'react/prop-types': [2, {
      ignore: [],
      customValidators: [],
    }],
    'react/react-in-jsx-scope': 2,
    'react/require-extension': [0, { extensions: ['.jsx'] }],
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/sort-prop-types': [2, {
      ignoreCase: false,
      callbacksLast: true,
      requiredFirst: true,
    }],
    'react/jsx-wrap-multilines': [2, {
      declaration: true,
      assignment: true,
      return: true,
    }],
  },
}