//Accessing Objects the Old way

let person = {
    firstName: 'Samson',
    lastName: 'Recluta',
    currentAge: 30,
};

// ES6 

// Access Objects the New way
// let {firstName, lastName} = person

//We can also RENAME the variables with the New way
// let { firstName: fName, lastName: lName } = person;

// console.log(person.firstName)


//Destructuring array

const arr = [1,2,3]

let [x, y, z] = arr
// console.log(x)
// console.log(y)
// console.log(z)

//Skipping items when array destructuring
const arrValue = ['one','two','three'];

//Setting defaults when object destructuring
let {firstName, lastName, middleName = '', currentAge: age = 20} = person
// console.log(age)
//Destructuring assingment in arrays
// let [x,,y] = arrValue;

//You can assign the remaining elements of an array to a variable using
// the spread operators `...`

const names = ['Samson', 'Recluta', 'Jl']

// const [x, ...y] = names

// console.log(x)
// console.log(y)


let member = {
    id: 1,
    name: {
        fname: 'Samson',
        lname: 'Recluta',
    }
};

//Assuming that you have a member in the PAPAFAM where the objects has 
// a name object as the property

let {id ,name: {fname, lname}, name } = member;

// console.log(fname)
// console.log(lname)
// console.log(name)

let displayFullname = ({fname1, lname1}) => `${person1.fname1} ${person1.lname1}`;

let person1 = {
    fname1: 'Samson',
    lname1: 'Recluta',

};
console.log(displayFullname(person1))