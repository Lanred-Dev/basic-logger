import log from "../log";

export default function warn(...params: [string, any]) {
    log("WARN", "warn", ...params);
}