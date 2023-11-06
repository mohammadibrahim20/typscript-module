{
  // interface

  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface User1WithRole2 extends User2 {
    role: string;
  }

  const user3: User1WithRole2 = {
    name: "John",
    age: 36,
    role: "admin",
  };

  const user1: User2 = {
    name: "John",
    age: 36,
  };

  // js--> object, array, object function - object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll1 = [1, 2, 3];

  type Add1 = (number1: number, number2: number) => number;
  interface Add {
    (number1: number, number2: number): number;
  }

  const add: Add = (number1, number2) => number1 + number2;

  type Num = [number, string, number];
  const num: Num = [1, "2", 3];

  //
}
