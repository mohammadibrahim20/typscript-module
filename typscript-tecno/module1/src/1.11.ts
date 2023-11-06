{
  //ternary operator || optoinal chaining || nullish colesching operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  // nulish coalescing opertor
  // null / undefined --> decision making
  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 });
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permenentAddress?: string;
    };
  };
  const user: User = {
    name: "persian",
    address: {
      city: "ctg",
      road: "awesome road",
      presentAddress: "noakhali street",
    },
  };
  const permenentAddress =
    user?.address?.permenentAddress ?? "no permenent address";
  console.log({ permenentAddress });

  //
}
