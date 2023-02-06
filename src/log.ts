const chalk = require("chalk");

const colors: { [key: string]: typeof chalk.ChalkInstance } = {
    error: chalk.red,
    info: chalk.white,
    success: chalk.green,
    warn: chalk.yellow,
};

export default function log(prefix: string = "prefix", color: string = "info", ...params: any) {
    console.log(colors[color].bold(`[${prefix}]`, "%s"), ...params);
}
