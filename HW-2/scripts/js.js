let N;
let M;

// N
do {
  N = +prompt('Введіть ціле число для N');
} while (N <= 0 || isNaN(N) || !Number.isInteger(N));
 
console.log({N});

// M
do {
  M = +prompt ("Введіть Ціле число M з умовою M>N", '0');
}
  while (M <= N || !isFinite(M) || !Number.isInteger(M));

console.log({M});


let evenOrOdd = confirm("Пропускати парні числа?");

alert( evenOrOdd );
console.log({evenOrOdd});


let sum = 0;
 
for (let i = N; i <= M; i++) {
  if (evenOrOdd == false && i % 2 === 0 ) {
    continue;
  }

  sum = sum + i;

}

console.log ({sum});
