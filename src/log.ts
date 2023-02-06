import chalk, { ChalkInstance } from "chalk";

const colors: { [key: string]: ChalkInstance } = {
    error: chalk.red,
    info: chalk.white,
    success: chalk.green,
    warn: chalk.yellow,
};

export default function log(prefix: string = "prefix", color: string = "info", ...params: [string, any]) {
    console.log(colors[color].bold(`[${prefix}]`, "%s"), ...params);
}
