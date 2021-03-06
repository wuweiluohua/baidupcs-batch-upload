import { limitexec } from "./limiter.js";
import { cmd } from "./index.js";

/**
 * @param {string} localfile
 * @param {string} desdir
 */
export default function(localfile: string, desdir: string) {
    return limitexec(cmd, ["upload", localfile, desdir]);
}
