// Функція №1 отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(randomNumber) {
    const ournumber = String(randomNumber).split("");
  
      return Math.max.apply(null, ournumber);
    }
  
  console.log(getMaxDigit(574303999));
  

// Функція №3, яка форматує ім'я, роблячи першу букву з Великої літери

function toUpperCaseName(name) {
 
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
    
console.log(toUpperCaseName('ukraine'));

// Функція №4 Вирахування чистої зп 

function calculateSalaryWithoutTax(salary, tax = 19.5) {
    let salaryTax = (salary / 100 ) * tax;
    let salaryAfterTax = salary - salaryTax;
  
   return salaryAfterTax;
  }

console.log (calculateSalaryWithoutTax(6000)); 

// Функція №5 повертає випадкове ціле число в діапазоні від N до M

function getRandomNumber(min, max)  {
    return Math.floor(Math.random() * (max - min) + min);
  }

console.log(getRandomNumber(3,55))


// Функція №9 Генерація випадкового паролю
 

function getRandomPassword(charset,length = 6) {
    let password = '';
    for(let i = 0; i < length; ++i){
       password += charset[
           Math.floor(
               Math.random() * charset.length
          )
      ];
    }
    return password;
 }

console.log (getRandomPassword('8273873898398dgfbvv3948')); 

 // Функція №11 Визначає, чи є слово паліндромом

function isPalyndrom(word) {
    return word === word.split('').reverse('').join(''); 
  }

console.log (isPalyndrom('ama'))

// document.writeln.

document.writeln (`<p>Функція No 1:${getMaxDigit(574303999)} </p>`) 
+document.writeln (`<p>Функція No 3:${toUpperCaseName('ukraine')} </p>`) 
+document.writeln (`<p>Функція No 4:${calculateSalaryWithoutTax(6000)} </p>`) 
+document.writeln (`<p>Функція No 5:${getRandomNumber(3,55)} </p>`) 
+document.writeln (`<p>Функція No 9:${getRandomPassword('8273873898398dgfbvv3948')} </p>`) 
+document.writeln (`<p>Функція No 11:${isPalyndrom('ama')} </p>`) ;
 
