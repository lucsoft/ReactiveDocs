import { startDevBuild } from "./builder/devBuild";
import { Page as page } from "./types/main";
import { Options } from "./types/options";
import { execSync } from 'child_process'
export const MDOS = (options: Options, ...pages: page[]) => {
    console.log("👋 Welcome to MDOCS Alpha")
    startDevBuild(options, pages);
}

export const Page = (page: page): page => {

    const getFileOfFunctionExecution = new Error()
        .stack
        .split(/\n/)[ 2 ]
        .trim()
        .split(' ')[ 2 ]
        .split(':')[ 0 ]
        .replace("(", "");

    let data = execSync(`git log ${getFileOfFunctionExecution} --no-decorate`).toString().split('\n');
    let lastUpdated: [ author: string, date: Date ] = [
        data[ 1 ].split(': ')[ 1 ].trim(),
        new Date(data[ 2 ].split(': ')[ 1 ].trim())
    ];

    return {
        LastUpdated: lastUpdated,
        ...page
    }
}