// 题目:实现一个type类型，用于约束特殊时间格式的字符串
// *例子:
// FormatDate<"DD-MM-YY">
// 允许的字符串为:
// const date: FormatDate<"DD-MM-YY"> ="2-12-2024""12-02-2024"
// 不允许的字符串为:
// const date: FormatDate<"DD-MM-YY"> = "112-12-2024" "12-112-2024" "12-12-12024"
// * 时间格式支持多种分隔符:"-" | "." | "/"

// type Seperator = "-" | "." | "/";

// type FormatDate<Pattren extends string> =
//   Pattren extends `${infer Aaa}${Seperator}${infer Bbb}${Seperator}${infer Ccc}`
//     ? [Aaa, Bbb, Ccc]
//     : never;

// type res = FormatDate<"YY-MM-DD">;
// type res2 = FormatDate<"YY/MM/DD">;

type Seperator = "-" | "." | "/";

type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Num2 = Num | 0;

type YY = `19${Num2}${Num2}` | `20${Num2}${Num2}`;

type MM = `0${Num}` | `1${0 | 1 | 2}`;

type DD = `${0}${Num}` | `${1 | 2}${Num2}` | `3${0 | 1}`;

type GenStr<Type extends string> = Type extends "YY"
  ? YY
  : Type extends "MM"
  ? MM
  : DD;

type FormatDate<Pattern extends string> =
  Pattern extends `${infer Aaa}${Seperator}${infer Bbb}${Seperator}${infer Ccc}`
    ? Pattern extends `${Aaa}${infer Sep}${Bbb}${infer _}${Ccc}`
      ? `${GenStr<Aaa>}${Sep}${GenStr<Bbb>}${Sep}${GenStr<Ccc>}`
      : never
    : never;

const a1: FormatDate<"YY-MM-DD"> = "2023-01-02";

const b2: FormatDate<"DD/MM/YY"> = "01/02/2024";

const c1: FormatDate<"DD/MM/YY"> = "2024-01-02";
