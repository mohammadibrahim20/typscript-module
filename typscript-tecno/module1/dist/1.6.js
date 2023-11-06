"use strict";
// Learning Functions
// 1. Normal function
// 2. arrow function
function add(x, y) {
    return x + y;
}
add(2, 4);
const AddArrow = (x, y) => x + y;
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
