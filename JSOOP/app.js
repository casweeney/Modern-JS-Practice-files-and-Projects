// Person constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getFullYear() - 1970);
//     // }
// }


// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const john = new Person('John', 'Doe', '03-21-1992');

// console.log(john.getFullName());

//ES6
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting = function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, customerType){
        super(firstName, lastName);
        this.phone = phone;
        this.customerType = customerType;
    }

    greeting = function(){
        return `Hello ${this.firstName}, what's the update?`;
    }
}

const cas = new Customer('Casweeney', 'Ojukwu', '07036798652', 'Standard');

console.log(cas.greeting());