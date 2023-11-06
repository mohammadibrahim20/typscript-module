{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "mezba",
    age: 50,
    gender: "male",
    contactNo: "0182222222",
    address: "ctg",
  };

  const student2: Student = {
    name: "mir",
    age: 10,
    gender: "male",
    address: "ctg",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "shakib";
  const isAdmin: IsAdmin = false;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
