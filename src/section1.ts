// Q1 Fooが持つプロパティ全てoptionalにする

interface Foo {
  bar: string;
  baz: number;
}
// TypeScript特有の組み込み型関数
// Partial
// （参考）https://log.pocka.io/ja/posts/typescript-builtin-type-functions/
console.log('Q1🍰');

// 答え
type PartialFoo = Partial<Foo>;