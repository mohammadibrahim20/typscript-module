// References type --> object
const user: {
  readonly company: string; // type --> literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "John",
  lastName: "china",
  isMarried: true,
};
// user.company = "ph";
