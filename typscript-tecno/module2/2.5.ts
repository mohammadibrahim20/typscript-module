{
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("hello");
  const resGenric = createArrayWithGeneric<boolean>(true);
  type User = { name: string; id: number };
  const resGenricObj = createArrayWithGeneric<User>({
    name: "hello",
    id: 22,
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res12 = createArrayWithTuple<string, number>("hello", 2);
  const resGenric2 = createArrayWithTuple<string, { name: string }>(
    "bangladesh",
    {
      name: "asia",
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "mr x",
    email: "student@gmail.com",
    devType: "next level web developer",
  });
  const student2 = addCourseToStudent({
    name: "mr y",
    email: "studenty@gmail.com",
    devType: "next level web developer",
    hasWatch: "Apple Watch",
  });

  //
}
