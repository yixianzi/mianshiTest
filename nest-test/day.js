// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);
const dayjs = require("dayjs");
// var utc = require("dayjs/plugin/utc");
// var timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin

// dayjs.extend(utc);
// dayjs.extend(timezone);

// const a = dayjs().subtract(1, "day").format("YYYY-MM-DD");
// console.log(a);

// const d2 = dayjs.utc();
// d2.format(); // => 2013-11-18T19:55:00+08:00
// d2.toISOString(); // => 2013-11-18T11:55:00.000Z

// console.log(d2.format());

const a = dayjs("2023-10-01").month();
console.log(a);

const func = (date) => {
  let d = dayjs(date);
  return (
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1)
  );
};

const t = new Date().getFullYear() - 1 + "-" + "12";
console.log(t);
