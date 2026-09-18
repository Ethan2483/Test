let n = prompt("Enter a number:");
n = Number(n);

let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial of " + n + " is " + factorial);
alert("Factorial of " + n + " is " + factorial);