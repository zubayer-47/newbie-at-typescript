"use strict";
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(value) {
        state = value;
    }
    return { getState, setState };
}
function setStateOfMain() {
    let state;
    function setStateFunc(value) {
        state = value;
        return state;
    }
    return { setStateFunc };
}
const state = useState();
state.setState(10);
console.log(state.getState());
const duplicateState = useState();
duplicateState.setState("Zubayer");
console.log(duplicateState.getState());
const state2 = setStateOfMain();
console.log(state2.setStateFunc(20));
// generics
function makePair() {
    let pair;
    function getPair() {
        return pair;
    }
    function setPair(first, second) {
        pair = { first, second };
    }
    return { getPair, setPair };
}
const pair = makePair();
pair.setPair("10", "Zubayer");
console.clear();
console.log(pair.getPair());
