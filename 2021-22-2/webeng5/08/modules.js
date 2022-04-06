import { add, multiply } from "./math.js";
import dayjs from "dayjs";

console.log(add(10, 32));
console.log(multiply(10, 32));
console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));