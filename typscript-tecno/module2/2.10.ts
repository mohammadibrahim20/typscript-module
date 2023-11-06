{
  // mapped types
  const arrayofNumbers: number[] = [1, 2, 3, 4, 5];
  //   const arrOfStrings: string[] = ["a", "b", "c", "d"];

  const arrayofStrings: string[] = arrayofNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayofStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lookup type
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
