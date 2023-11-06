{
  // utility types
  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type name = Pick<Person, "name">;

  //   Omit
  type ContactInfo = Omit<Person, "name" | "age">;
  //   Required
  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  //   Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "John",
    age: 22,
    contactNo: "0128",
  };
  //   person1.contactNo = "0128";

  // record
  //   type Myobj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};
  EmptyObj.name = "hidden";

  const obj1: MyObj = {
    a: "John",
    b: "c",
    c: "d",
    d: "e",
  };
}
