import log from "../log";

export default function error(...params: any) {
    log("ERROR", "error", ...params);
}