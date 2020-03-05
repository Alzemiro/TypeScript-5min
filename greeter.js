function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Iago", lastName: "Moraes" };
console.log(greeter(user));