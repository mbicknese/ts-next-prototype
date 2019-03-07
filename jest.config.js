module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/*.spec.ts',
        '**/__tests__/*.spec.tsx'
    ],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    globals: {
        'ts-jest': {
            tsConfig: {
                jsx: 'react',
                module: 'commonjs'
            }
        }
    },
    setupFiles: [
        '<rootDir>/test-setup.js'
    ],
    moduleNameMapper: {
        'modules/(.*)': '<rootDir>/modules/$1'
    }
}
