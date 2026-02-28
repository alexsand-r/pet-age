export function getCatHumanAge(catAge: number): number {
  let catAgeOfPeople: number = 0;

  if (catAge <= 1) {
    catAgeOfPeople = catAge * 15;
  } else if (catAge <= 2) {
    catAgeOfPeople = Math.floor(15 + (catAge - 1) * 9);
  } else {
    catAgeOfPeople = Math.floor(24 + (catAge - 2) * 4);
  }

  return catAgeOfPeople;
}

export function getDogHumanAge(dogAge: number): number {
  let dogAgeOfPeople: number = 0;

  if (dogAge <= 1) {
    dogAgeOfPeople = dogAge * 15;
  } else if (dogAge <= 2) {
    dogAgeOfPeople = Math.floor(15 + (dogAge - 1) * 9);
  } else {
    dogAgeOfPeople = Math.floor(24 + (dogAge - 2) * 5);
  }

  return dogAgeOfPeople;
}
