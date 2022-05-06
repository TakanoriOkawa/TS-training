"use strict";
// conditional Typesについて
// 型定義における条件分岐です。
// 構文
// type MyCondition<T,U,X,Y> = T extends U ? X : Y;
// TがUに代入可能であればXを、そうでなければYという型
// 代入はextends
// （参考）https://qiita.com/Quramy/items/b45711789605ef9f96de
