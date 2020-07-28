// console.log("event listeners");

// callbacks - the ability to pass a function as an argument to another argument 

// function createGreeting(user, cb) {
//   return cb(user);
// }

// createGreeting('dan', saysHelloToUser);


// function helloToUser (user) {
//   return `Hello ${user}`;
// }
// function goodByeToUser (user) {
//   return `Good Bye ${user}`;
// }
// function callBackTest (user, cb) {
//   return cb(user);
// }
// console.log(callBackTest(`Jon`, helloToUser))
// console.log(callBackTest(`Ryan`, goodByeToUser))

// let myBtn = document.getElementById('main-btn');

// console.log(myBtn);

function youClickedMe () {
  console.log("you clicked me! ");
}



 const othaBtn = document.querySelector('#main-btn');

console.log(othaBtn);




othaBtn.addEventListener('click',() => {
  console.log('You clicked Me!');
});

// const whatIsTheId = (e) => {
//   return `The element ID is ${e.target.id}`;
// }

// othaBtn.addEventListener(click, whatIsTheId);
