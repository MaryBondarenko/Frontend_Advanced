
// 1. Функція, яка повертає масив випадкових цілих чисел.

function getRandomArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
const getArray = getRandomArray(15, 1, 100);
console.log(`${getArray} --> масив випадкових цілих чисел`);

// 2. Функція, яка фільтрує парні числа передані як аргументи функції.

function filterEvenNumbers() {

let arr = [1, 2, 3, 4, 5, 6];

    let even = [];

    for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    }   
    return even;
}

const evenNumbers =  filterEvenNumbers();
console.log(`${evenNumbers} --> парні числа`);

// 3. Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів.

const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(`${getAverage(numbers)} --> середнє арифметичне`);

// 4. Функція, яка фільтрує числа, які діляться на 5

function getDividedByFive(array) {
	const res = array.filter((item) => item % 5 === 0);
	return res;
}
console.log(`${getDividedByFive(getArray)} --> числа, що діляться на 5`);

// 5. Функція, яка яка порахує суму чисел більше 0.

function countPositiveNumbers(numbers){
    const amount  = numbers.filter((number) => {return number > 0})
    return amount.length
}
console.log(`${countPositiveNumbers(getArray)} --> сума чисел більше 0 `);

// 6. Функція, яка яка рахує медіану всіх переданих в неї аргументів.

  function getMedian(values) {
    values.sort( function(a,b) {return a - b;} );
    const half = Math.floor(values.length/2);
      if(values.length % 2)
        return values[half];
      else
        return (values[half-1] + values[half]) / 2.0;
  }
  const mediana = getMedian(getArray)
  console.log(`${mediana} --> медіана чисел`);

 