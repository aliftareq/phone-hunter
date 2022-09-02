// declaring an object

const student = {
    name: 'alif',
    class: 12,
    isRegular: true,
    subjects: ['Bangla', 'Higher-Math', 'ICT', 'Physics', 'Chemistry', 'English', 'Biology'],
    Marks: {
        bangla: 68,
        English: 61,
        ICT: 72,
        Physics: 68,
        Chemistry: 73,
        Math: 91,
        Biology: 85
    },
    activity: function () {
        return `${this.name}, is connected with several volunteer organization.`
    }
}

// calling a function which return a property of object
// const result = student.activity()
// console.log(result)


//declating a template string
const studentSpeciality = `${student.name} is very good at ${student.subjects[1]}. His score in Math in last semester was ${student.Marks.Math}.`
//console.log(studentSpeciality);

/*-----------------arrow function------------------*/

//4-1. null paramete returning object
const number = () => 89;
//console.log(number())

//4-2. one parameter returning quotient
const quotient = number => number / 17;
//console.log(quotient(34))

//4-3. two parmeter return odd even
const oddOReven = (num1, num2) => ((num1 + 7) + (num2 + 5)) % 2 == 0 ? true : false;
//console.log(oddOReven(7, 5));

//4-4 multiple line arrow function

// const sumSquareReturn = (arr) => {
//     let sum = 0
//     for (const num of arr) {
//         sum = sum + num;
//     }
//     const result = sum ** 2
//     return result;
// }

// console.log(sumSquareReturn([1, 2, 3, 4, 5]))


//5 apply map() in array
const result = [7, 14, 21, 28, 35].map(num => num / 7);
//console.log(result)

//6 map() vs forEach vs filter vs find
/**
 * map() is usully used for if we want to apply an operation on every single element of an array
 * forEach is used for apply an operation like map but it dont return the value
 * filter is for >> apply an operation, based on a condition, on every single element of an array, and then return the those values for which the condition was true.
 * find is also like fileter but it only return the first value , where filter return all the value.
 */

// using object and array destructuring

const { name, job } = { name: 'clown-mushfiq', age: '35', job: 'catch miss kora' }
const [salary, balance] = [50000, 5000, 4000, 20000]

//console.log(name, job, balance)


// delete an object propery

// const student2 = {
//     name: 'alif',
//     class: 12,
//     isRegular: true,
//     subjects: ['Bangla', 'Higher-Math', 'ICT', 'Physics', 'Chemistry', 'English', 'Biology'],
//     Marks: {
//         bangla: 68,
//         English: 61,
//         ICT: 72,
//         Physics: 68,
//         Chemistry: 73,
//         Math: 91,
//         Biology: 85
//     },
//     activity: function () {
//         return `${this.name}, is connected with several volunteer organization.`
//     }
// }

// const { Marks, ...rest } = student2;

// console.log(student2)