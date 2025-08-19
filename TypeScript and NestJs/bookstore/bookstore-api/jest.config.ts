import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '.',
    moduleFileExtensions: ['ts', 'js', 'json'],
    // Unit tests: src/**/*.spec.ts
    testRegex: '.*\\.spec\\.ts$',
    transform: { '^.+\\.(t|j)s$': 'ts-jest' },
    collectCoverageFrom: ['src/**/*.(t|j)s'],
    coverageDirectory: 'coverage',
    // Use a test tsconfig if you like (optional, but tidy)
    // globals: { 'ts-jest': { tsconfig: 'tsconfig.spec.json' } },
};

export default config;
