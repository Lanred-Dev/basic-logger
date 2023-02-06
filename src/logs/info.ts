import log from "../log";

export default function info(...params: any) {
    log("INFO", "info", ...params);
}