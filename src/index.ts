import { startDevBuild } from "./builder/devBuild";
import { Page } from "./types/main";
import { Options } from "./types/options";

export const MDOS = (options: Options, ...pages: Page[]) => {
    console.log("👋 Welcome to MDOCS Alpha")
    startDevBuild(options, pages);
}