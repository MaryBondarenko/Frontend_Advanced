const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];


// 1. Функція, яка яка повертає список предметівидля конкретного студента.
//Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const res = Object.keys(students[0].subjects)

const getSubjects = function(students) {
    let formatedThemes = [] ;
    const themes = res;
        themes.forEach(theme => {
            formatedThemes.push(theme[0].toUpperCase() + theme.slice(1).replaceAll('_',' '));
        });
        return formatedThemes;
}
console.log(getSubjects(students[0]))

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку.

function getAverageMark(students) {
    let averageMark = [];
    let averageMarkLenght = 0;
    for (let i in students.subjects) {
        averageMark = Object.values(students.subjects).flat().reduce((a, b) => a + b);
        averageMarkLenght = Object.values(students.subjects).flat().length;
    }
    return (averageMark / averageMarkLenght).toFixed(2);
}

console.log(getAverageMark(students[0]));

// 3. 

//getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}

function getStudentInfo (students) {
    const mark = getAverageMark(students);
    const { name, course } = students;
    return {
            name,
            course,
            mark
    }
}

console.log(getStudentInfo(students[0]));

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
    const studentNames = [];
    for(let student of students) {
        studentNames.push(student.name)
    }
    return studentNames.sort();
}

console.log(getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
    const marks = [];
    for (let i = 0; i < students.length; i++){
        marks.push(parseFloat(getAverageMark(students[i])));
    }
    const greatestMarkIndex = marks.indexOf(Math.max(...marks));

    return students[greatestMarkIndex].name;
}

console.log(getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word){
    const letters = {};
    for (let i = 0; i < word.length; i++){
       const letter = word[i];
        if (letters[letter]){
            letters[letter]++;
        }
        else{
            letters[letter] = 1;
        }
    }
    return letters;
}

console.log(calculateWordLetters("grappppratty"));