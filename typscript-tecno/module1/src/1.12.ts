{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is noting to search");
    }
  };

  searchName(null);
  // unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [valueStr, unit] = value.split(" ");
      const convertedSpeed = (+valueStr * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong value ");
    }
  };

  getSpeedInMeterPerSecond(`1000 kmkh^-1`);

  // never
  const throwError = (message: string): never => {
    // throw new Error(message);
  };

  throwError("mushkil se error hogaya");
}
