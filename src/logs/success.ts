import log from "../log";

export default function success(...params: [string, any]) {
    log("SUCCESS", "success", ...params);
}