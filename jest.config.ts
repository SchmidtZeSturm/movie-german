import "module-alias/register";
import type { Config } from "@jest/types";
import { defaults } from "jest-config";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { resolve } from 'path';

const { compilerOptions } = require('./tsconfig.json');

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        roots: ["<rootDir>/src"],
        cacheDirectory: "<rootDir>/build/.cache/jest/",
        verbose: true,
        testEnvironment: "node",
        moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
        transform: {
            "^.+\\.(t|j)s$": "ts-jest",
        },
        moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: "<rootDir>/" } ),
        modulePaths: [
            '<roorDir>/tests/fixtures',
            '<rootDir>/src',
        ]
    };
};

export const dataPath: string = resolve(__dirname, 'data');
