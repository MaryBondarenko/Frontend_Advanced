const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів","Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 3. Зіставте оцінки(marks) зі студентом(students)

const studentsMarks = getMarks(students, marks);

function getMarks(students, marks){
    return students.map(e => [e, marks[students.indexOf(e)]])
  }

console.log(studentsMarks);

// 1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.

const getPairs =  (students) => {
    const pairs = [];
    pairs.push(
        students.splice(4),
        students.splice(1,2),
        students.splice(-3)
        );
    return pairs;
    }
    
    const pairs = getPairs(students);

console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

const themesPairs = getThemes(pairs, themes);

function getThemes(pairs, themes){
    return pairs.map(e => [e.join(" i "), themes[pairs.indexOf(e)]]);
  }

console.log(themesPairs);

 
// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт

const randomMark = getRandomMark(themesPairs, 1, 5); 

function getRandomMark(themesPairs, min, max){
    return themesPairs.map(e => e.concat(Math.floor(Math.random() * (max - min + 1) + min)));
    }

console.log(randomMark);

