import chalk, { ChalkInstance } from "chalk";

const colors: { [key: string]: ChalkInstance } = {
    error: chalk.red,
    info: chalk.white,
    success: chalk.green,
    warn: chalk.yellow,
};

export default function log(message: string, prefix: string = "prefix", color: string = "info") {
    console.log(colors[color].bold(`[${prefix}]`, "%s"), message);
}
