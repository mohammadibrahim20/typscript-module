// destructuring
{
  const user = {
    id: 345,
    name: {
      firstName: "mezbault",
      middleName: "Abeding",
      lastName: "Persian",
    },
    contactNo: "01222222222",
    address: "Bangladesh",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  const myFriends = ["mezbault", "john", "ross", "reald", "monica"];
  const [, , bestFriend, ...rest] = myFriends;
}
