import log from "../log";

export default function warn(...params: any) {
    log("WARN", "warn", ...params);
}