var userOne = {
    email: 'ryu@ninjas.com',
    name: 'ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};



// -----------------------------------------

userOne.name = 'yoshi';
console.log(userOne)




userOne.name = 'Ryu';
console.log(userOne)


console.log(userOne.email);
console.log(userOne['email']);


userOne['name'] = 'mario';
console.log(userOne['name']);
console.log(userOne)


// ------------------------------

var prop = 'name';
console.log(prop); // undefined

userOne[prop]
console.log(userOne[prop]);



prop = 'email';
console.log(prop);

console.log(userOne[prop]);


console.log(userOne.name)



// -------------------------------

userOne.age = 25;

console.log(userOne);
console.log(userOne.age);


userOne.logInfo = function () { }
console.log(userOne.logInfo)















