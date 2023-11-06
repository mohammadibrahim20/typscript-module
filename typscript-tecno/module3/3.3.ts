{
  // type guard

  // typeof --> type guard
  type AlphaNeomaric = number | string;
  const add = (param1: AlphaNeomaric, param2: AlphaNeomaric): AlphaNeomaric => {
    if (typeof param1 === "number" && typeof param2 == "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("10", "20");
  const result2 = add(10, 20);
  console.log({ result1, result2 });

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "mr. normal user",
  };
  const adminUser: AdminUser = {
    name: "admin user",
    role: "Admin",
  };
  getUser(normalUser);
  getUser(adminUser);
}
