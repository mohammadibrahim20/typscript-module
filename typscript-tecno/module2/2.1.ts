{
  // type assertion
  let anything: any;
  anything = "next level web development";

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "number") {
      return value * 1000;
    } else if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`;
    }
  };

  const result1 = kgToGm(10000) as number;
  const result2 = kgToGm("10000") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
