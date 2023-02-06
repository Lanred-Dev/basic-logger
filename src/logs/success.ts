import log from "../log";

export default function success(message: string) {
    log(message, "SUCCESS", "success");
}