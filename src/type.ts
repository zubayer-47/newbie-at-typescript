// Array as lists;
let arr: number[] = [];
let arr2: Array<number> = [];

// array as tuples;
let point: [number, number] = [2, 3];

// const entries = Object.entries({ name: "Zubayer", age: 19 });
// console.log(entries);

function stringify123(callback: (num: number) => string) {
  return callback(123);
}

// console.log(stringify123((num) => String(num)));

// Interface for object
interface Point {
  x: number;
  y: number;
  distance(other: Point): number;
}

// type Todo = {
//   id: number;
//   text: string;
//   done: boolean;
//   isShow: boolean;
// };

// const foo: Todo = {
//   id: 1,
//   text: "Zubayer",
//   done: false,
//   isShow: true,
// };

// read only properties and intersection types
type Person = Readonly<{
  name: string;
  age: number;
  gender?: string;
  adult: boolean;
}>;

type another = Readonly<{ adult: true }>;

type PersonAndAnother = Person & another;

function makeAllPersonAdult(p: Person): PersonAndAnother {
  return {
    ...p,
    adult: true,
  };
}

console.log(makeAllPersonAdult({ name: "Zubayer", age: 19, adult: false }));
