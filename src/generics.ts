function useState<S extends number | string = number>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(value: S) {
    state = value;
  }

  return { getState, setState };
}

function setStateOfMain<T = number>() {
  let state: T;

  function setStateFunc(value: T): T {
    state = value;

    return state;
  }

  return { setStateFunc };
}

const state = useState();

state.setState(10);

console.log(state.getState());

const duplicateState = useState<string>();

duplicateState.setState("Zubayer");

console.log(duplicateState.getState());

const state2 = setStateOfMain();
console.log(state2.setStateFunc(20));

// generics
function makePair<F extends number | string, S extends F>(): {
  getPair(): { first: F; second: S };
  setPair(first: F, second: S): void;
} {
  interface Pair {
    first: F;
    second: S;
  }
  let pair: Pair;

  function getPair(): Pair {
    return pair;
  }

  function setPair(first: F, second: S): void {
    pair = { first, second };
  }

  return { getPair, setPair };
}

const pair = makePair();

pair.setPair("10", "Zubayer");

console.clear();
console.log(pair.getPair());
