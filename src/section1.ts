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

// Q2 Fooが持つプロパティ全て必須にする
console.log('Q2🍰');

// 答え
type RequireA = Required<Foo>;

// Q3 Fooからnameだけを取得したtypeを作ってください
console.log('Q3🍰');

// Pickを使う これは便利そう
// 新しいオブジェクトの型を作る。Fooから一部を持ってくる
type Picked = Pick<Foo, 'bar'>;
