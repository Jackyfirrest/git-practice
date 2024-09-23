// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();
console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.size());

stack.print();

stack.clear();
console.log(stack.isEmpty());

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？