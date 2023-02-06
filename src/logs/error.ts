import log from "../log";

export default function error(...params: [string, any]) {
    log("ERROR", "error", ...params);
}