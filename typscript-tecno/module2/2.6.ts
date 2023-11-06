{
  // constrains

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "mr x",
    email: "x@gmail.com",
    devType: "next level web developer",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "mr y",
    email: "studenty@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
