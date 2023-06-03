import './style.css'

console.log("testing")
let name = 'pouya';

console.log(`my name is ${name}`);

const a = `
<p>
  <label for="myname">enter name</label>
  <input id="myname" type="text" />
<br /><br/>
  <label for="myname2">enter last name</label>
  <input id="myname2" type="text" />

  <br /><br />
  <div class="box"></div>
  <div>hello <span id="msg">${name}</span></div>

  <button id="btn">test</button>


  <button id="learn-promise">learn promise</button>
  <div class="box-promise"></div>
</p>`;
document.getElementById('app').innerHTML = a;

// click handler logic
function clickHandler() {
  name = document.getElementById('myname').value;
  document.getElementById('msg').innerHTML = name;
  alert(`clicked ${name}`);
}
document.getElementById('btn').addEventListener('click', clickHandler)


// typing handler logic
function blabla() {
  name = document.getElementById('myname').value;
  const name2 = document.getElementById('myname2').value;
  document.getElementById('msg').innerHTML = `${name} ${name2}`;

  console.log('name', name, 'name2', name2)
  // show/hide boxes
  if (name === 'hi' && name2 === 'bye') {
    const boxes = document.getElementsByClassName('box');
    boxes[0].classList.add('display')
  } else {
    document.getElementsByClassName('box')[0].classList.remove('display')  
  }
}
document.getElementById('myname').addEventListener('keyup', blabla)
document.getElementById('myname2').addEventListener('keyup', blabla)





// good old syntax, hoisted
function testfunction(name, lname) {
  console.log('hi 1')
  return `${name} ${lname}`
}
// fancier syntax
const testfunction2 = function(name, lname) {
  console.log('hi 2')
  return `${name} ${lname}`
}
// arrow function (NEW!!!)
const testfunction4 = (name, lname) => {
  console.log('hi 4')
  return `${name} ${lname}`
}
// one-liner short arrow function
const testfunction3 = (name, lname) => `${name} ${lname}`

console.log(testfunction('pouya', 'sanooei'))
console.log(testfunction2('angie', 'mai'))
console.log(testfunction3('yashar', 'ghasempour'))
console.log(testfunction4('aylar'))







// object literal
const human = {
  // properties, members, fields
  name: 'angie',
  lname: 'mai',
  age: 40,
  height: 130,
  children: ['aylar', 'yashar'],
  boyfriend: 'pouya',
  uncle: 'Nader',
  mommy: 'Raha',
  countries: {
    vietname: true,
    canada: true,
    usa: false,
    germany: false,
    hasBeenInCountry(countryName) {
      //this['usa']
      //this.usa
      //this[countryName]
      return this[countryName];
    },
  },
  // methods
  // prefered syntax (most common)
  hi() {
    console.log('hi called')
    return `hi ${this.name}`
  },
  // alternative syntax
  displayName: function() {
    console.log('displayName called')
    return `${this.name} ${this.lname}`
  },
  // edge case syntax
  bye: () => {
    console.log('bye called')
    return `bye ${human.uncle}`
  },
}
const keyName = 'age'
console.log(human.age);
console.log(human[keyName]);
console.log(human.displayName());
console.log(human.hi());
console.log(human.bye());

console.log('has it been?', human.countries.hasBeenInCountry('canada'))

// see? everything is an object, that's why u can use '.' and method/members names
const somestring = 'hi'
console.log(somestring.length)
console.log(somestring.toUpperCase())


// factory
function express(age = 20) {
  const myObject = {
    fname: 'nader',
    lname: 'ghasempour',
    hi() {
      console.log(`hi ${this.fname} ${this.lname}`)
      return `hi ${this.fname} ${this.lname}`
    },
    tellMeAge() {
      console.log(`his age is ${age}`)
    }
  }
  return myObject;
}

const app1 = express();
app1.hi();
app1.tellMeAge();

const app2 = express(50);
app2.tellMeAge();

// array
let cars = ["Saabnn", "Volvoooo", "BMW"];
const cars7 = ["Sa", "Vo", "BW"];
cars[0] = "Opellll";
console.log(cars)
console.log(cars.length)

const cars3 = ['Benz', ...cars, ...cars7, 'Tesla']; // spread syntax
console.log('cars3', cars3);

// arrays useful methods
for (let i =0 ; i < cars.length; i++) {
  console.log('for loop', cars[i])
}

// forEach with a function that is already defined
function myCallbackFn(value, index) {
  console.log('forEach', value, index)
}
cars.forEach(myCallbackFn);

// in-line arrow function
// foreach calls a function on each value of the array
cars.forEach(
  (value) => console.log('forEach', value)
);

// MAP
let emptyArray = []
for (let i = 0; i < cars.length; i++) {
  emptyArray.push(`${cars[i]}!`)
}
console.log(emptyArray)

let emptyArray2 = []
cars.forEach((value) => {
  emptyArray2.push(`${value}!`)
})

let emptyArray3 = []
emptyArray3 = cars.map((value) => {
  return `${value}!`
})
console.log(emptyArray3);

// map generates an array by calling a function on each value of the array
// and use the 'return value' of that function for the value of the new array
// that it's generating.
const cars10 = cars.map((value) => `${value}!`)

console.log(cars10);

// filter
// generates an array by filtering some values out
console.log(cars)
const cars11 = cars.filter((value) => value.length > 4)
console.log(cars11)

const cars12 = cars
  .filter((value) => value.length > 4)
  .map((value) => `${value}!!!`)
console.log(cars12)

cars12.forEach((value) => console.log(value))


// callback
function testCallback() {
  console.log('testCallback');
}
setTimeout(testCallback, 3000); // js: event loop or asynchronous 
setTimeout(testCallback, 5000);
console.log('end') // executed first

const timer = setInterval(testCallback, 500); // repeat
setTimeout(() => clearInterval(timer), 5000);

// promise
function myResolver(resolve, reject) {
  console.log('ME: hi starbucks, can i have a dark small coffee')
  setTimeout(() => {
    resolve('dark small');
  }, 3000)
}
const myPromise = new Promise(myResolver)

myPromise
  .then((resolvedValue) => {
    console.log(`Starbucks: your ${resolvedValue} coffee is ready`)
  })
  .catch((rejectedValue) => {
    console.log(`Starbucks: we can't make your ${rejectedValue} coffee, sorry!`)
  })


  // practical promise example
// document.getElementById('learn-promise').addEventListener('click', () => {
//   const learnPromise = new Promise(learnPromiseResolver)
//   learnPromise.then(() => {
//     console.log('learn promise resolved')
//     document.getElementsByClassName("box-promise")[0].classList.add('display')
//   }).catch(() => {
//     console.log('ugly')
//     document.getElementsByClassName("box-promise")[0].classList.remove('display')
//   })
// })

// function learnPromiseResolver(resolve, reject) {
//   setTimeout(() => {
//     const value = document.getElementById('myname').value
//     if (value === 'learn') {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 1000)
// }

// async/await
document.getElementById('learn-promise').addEventListener('click', async () => {
  const learnPromise = new Promise(learnPromiseResolver)
  const result = await learnPromise
  if (result) {
    document.getElementsByClassName("box-promise")[0].classList.add('display')
  } else {
    document.getElementsByClassName("box-promise")[0].classList.remove('display')
  }
})

function learnPromiseResolver(resolve, reject) {
  setTimeout(() => {
    const value = document.getElementById('myname').value
    if (value === 'learn') {
      resolve(true);
    } else {
      reject(false);
    }
  }, 1000)
}

