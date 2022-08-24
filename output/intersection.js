"use strict";
// intersection;
// function that make things happen
function detailsOfAnimal(animal) {
    return Object.assign(Object.assign({}, animal), { hands: false });
}
const animalDetailsObject = detailsOfAnimal({
    type: "Cow",
    ears: 2,
    legs: 4,
    hands: false,
    tail: true,
});
console.log(animalDetailsObject);
