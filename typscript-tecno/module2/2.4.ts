{
  // interface - generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Microsoft",
    computer: {
      brand: "Microsoft",
      model: "Microsoft ctgg",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch 8",
      display: "OLED",
    },
  };
  const reachDeveloper: Developer<
    {
      brand: string;
      model: string;
      display: string;
      heratTrack: boolean;
      sleepTrack: boolean;
    },
    { model: string }
  > = {
    name: "Alon Musk",
    computer: {
      brand: "Apple",
      model: "Mac book",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch 7",
      display: "OLED",
      heratTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "discover",
    },
  };

  //
}
