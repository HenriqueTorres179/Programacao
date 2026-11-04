let nums = [4, 7, 2, 9];
let soma = 0;
nums.forEach((num) => {
  soma += num;
});
console.log(`A soma total é de: ${soma.toFixed(2).replace(".", ",")}`);
