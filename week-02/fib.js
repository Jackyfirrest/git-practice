function fib(n) {
    // TODO: implement fibonacci
    if (n === 0) 
        return 0;
    if (n === 1) 
        return 1;

    let num1 = 0;
    let num2 = 1;
    
    for (let i = 2; i <= n; i++) {
      let num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
    }
  
    return num2;
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55