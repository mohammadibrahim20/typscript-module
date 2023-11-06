{
  // spread operator
  // rest operator
  // destructuring operators

  const bros1: string[] = ["mir", "firoz", "mizan"];
  const bros2: string[] = ["Tanmoy", "nahid", "rahat"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezbar",
    redux: "Mir",
    dbms: "mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "nahid",
  };

  const mentolist = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi friend ${friend}`));
  };

  greetFriends("abul", "babul", "kabul", "ubul");
}
