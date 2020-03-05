interface Person {
  firstName: string;
  lastName: string;
}


function greeter(person: Person){
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Iago", lastName: "Moraes"};

console.log(greeter(user));