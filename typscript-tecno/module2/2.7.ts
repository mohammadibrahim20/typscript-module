{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "Bike" | "Car" | "Ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner = "Car";
  const person2: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "John",
    age: 22,
    address: "ctg",
  };

  console.log(user, "name");
  //   user["name"]

  //
}
