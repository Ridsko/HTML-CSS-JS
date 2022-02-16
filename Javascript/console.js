const objectOne = {

    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2021 - 1988,
    job: 'teacher',
    friends: ['Koe','Vos'],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },

};

const hisAge = 'firstName';
console.log(objectOne['hisAge']);