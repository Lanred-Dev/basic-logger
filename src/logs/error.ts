import log from "../log";

export default function error(message: string) {
    log(message, "ERROR", "error");
}