// intersection;

type Animal = Readonly<{
  type: string;
  legs: number;
  ears: number;
  hands: boolean;
  tail: string | boolean;
}>;

type changeAnimalHandType = Readonly<{ hands: false }>;

type animalAndChangeAnimalHandleType = Animal & changeAnimalHandType;

// function that make things happen
function detailsOfAnimal(animal: Animal): animalAndChangeAnimalHandleType {
  return {
    ...animal,
    hands: false,
  };
}

const animalDetailsObject = detailsOfAnimal({
  type: "Cow",
  ears: 2,
  legs: 4,
  hands: false,
  tail: true,
});

console.log(animalDetailsObject);
