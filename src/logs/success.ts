import log from "../log";

export default function success(...params: any) {
    log("SUCCESS", "success", ...params);
}