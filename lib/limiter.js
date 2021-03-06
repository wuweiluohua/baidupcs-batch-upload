import AsyncLimiter from "@masx200/async-task-current-limiter";
import { execFile } from "child_process";
import { promisify } from "util";
import { argsobj } from "./argsobj.js";
const 同时并发的上传文件个数 = Number(argsobj["concurrent"]) || 12;
const limiter = AsyncLimiter(同时并发的上传文件个数);
const execpro = promisify(execFile);
export const limitexec = limiter.asyncwrap(execpro);
