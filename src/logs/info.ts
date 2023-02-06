import log from "../log";

export default function info(...params: [string, any]) {
    log("INFO", "info", ...params);
}