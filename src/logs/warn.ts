import log from "../log";

export default function warn(message: string) {
    log(message, "WARN", "warn");
}