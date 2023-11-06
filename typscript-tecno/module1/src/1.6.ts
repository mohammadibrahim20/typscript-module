// Learning Functions
// 1. Normal function
// 2. arrow function

function add(x: number, y: number): number {
  return x + y;
}

add(2, 4);

const AddArrow = (x: number, y: number): number => x + y;

const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
