const db = require("./database");
const noop = require("lodash/noop");

const scores = [
  ["U0X9XCSJU", 77],
  ["U91UYKT0T", 64],
  ["U92U9GW6B", 59],
  ["U0VKKHBRV", 39],
  ["U0VK9NYS0", 37],
  ["U1Q64MDA8", 34],
  ["UA0L3D0F8", 28],
  ["U0STZ15FX", 26],
  ["U3KGU010S", 25],
  ["U3J1Y4EK1", 25],
  ["U0STZ9ZNZ", 23],
  ["UBNAGG1A6", 22],
  ["U9C0MHVU2", 11],
  ["U2229E6BF", 10],
  ["U7D8WRKDZ", 8],
  ["U956STC86", 7],
  ["U94NV40SE", 6],
  ["U91S1FR6E", 6],
  ["U8UTELY5D", 6],
  ["UB5J060AH", 5],
  ["U91TF9J1Y", 5],
  ["U0K4Z5GQL", 5],
  ["UBLLARSUQ", 4],
  ["UCZL79VNY", 4],
  ["UDWMG08Q5", 4],
  ["U9BBXT1MX", 4],
  ["U9ZR48E4A", 3],
  ["U9516QTR6", 3],
  ["U221AR4MU", 3],
  ["UCQDYJGKD", 3],
  ["UBND6BN3H", 3],
  ["U917T3056", 2],
  ["UA0SH330X", 2],
  ["U9JN1EB1R", 2],
  ["U92T8R27R", 2],
  ["U91P995H9", 1],
  ["U915K6V3N", 1],
  ["U8UMAPSHL", 1],
  ["UCXTDK8F5", 1],
  ["UDR3UE79B", 1],
  ["U9218HBT2", 1],
  ["UA0HUM75E", 1],
];

scores.forEach((s) => {
  const userTo = s[0];
  const score = s[1];
  const channel = null;
  const userFrom = null;

  for (let i = 0; i < score; i += 1) {
    db.addTaco(channel, userFrom, userTo, noop);
  }
});
