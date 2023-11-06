{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [1, 2, 3, 4, 5];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

  //   const mentors: string[] = ["a", "b", "c", "d"];
  const mentors: GenericArray<string> = ["a", "b", "c", "d"];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Jonkar ",
      age: 22,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(10, 20);

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const man: GenericTuple<string, string> = ["Mr, X", "Mrs Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "John", email: "john@example.com" },
  ];

  //
}
