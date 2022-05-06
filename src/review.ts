console.log('復習ファイル');

// Tuple型 型の順序を固定できる
const tupleArray: [string, number] = ['hoge', 30];

// Aの型をBの型に代入できるとき AはBと互換性があるということである

// 互換性がある例。
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// typeofで型を確認
console.log(typeof fooCompatible); // anyの場合 「undefined」

fooCompatible = barCompatible; // 代入できる

console.log(typeof fooCompatible); // anyの場合 互換性のある型を代入した場合、代入元の型になる

// 互換性がないものは代入できない

let fooString: string;
let barNumber: number = 1;

// fooString = barNumber; // エラーになる

// 文字列リテラル型は文字列型のという大枠の一部だから。
// 同じく数値リテラル型は数値型と互換性がある

// 構造的部分型の例
// オブジェクト同士の

// 構造的部分型
// TypeScript では構造的部分型という考え方を採用している。
// 具体的には、2 つの構造体のプロパティをチェックし、それが一致すれば両者には互換性があると見做す。
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Person; // ここがPersonでもAnimalでも代入できる
// let me: Animal; // ここがPersonでもAnimalでも代入できる

// プロパティの型さえ同じであれば、互換性があるとみなされる

me = new Person(20, 'tanaka');

console.log(me);
