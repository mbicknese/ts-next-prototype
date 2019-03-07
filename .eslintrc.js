module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "indent": ["error", 4]
    },
    "overrides": [
        {
            ...require('eslint-plugin-jest').configs.recommended,
            plugins: ['react', 'jest'],
            env: {
                'es6': true,
                'jest/globals': true,
            },
            rules: {
                ...require('eslint-plugin-jest').configs.recommended.rules,
                ...require('eslint-plugin-react').configs.recommended.rules,
                'react/react-in-jsx-scope': "off"
            },
            files: ['**/__tests__/*.spec.ts', '**/__tests__/*.spec.tsx'],
            settings: {
                react: {
                    version: "detect"
                }
            }
        }
      ]
}
