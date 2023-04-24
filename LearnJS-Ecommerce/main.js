import './style/sass/main.scss'
//import { setupCounter } from './cart.js'

/*document.querySelector('#app').innerHTML = `
 
`
*/

//setupCounter(document.querySelector('#counter'))


// object lterals 
const car = {
  name:"",
  model:200,
  color:""
}

// solution for literals is factory function near to construction  
// it is a design pattern
function createcar(name, model, color){
  return{
    name:name,
    model:model,
    color:color,
    // for methods you add functions like props
    start: function(){
      console.log("start")
    },
    stop: function(){
      console.log("stop")
    }
  };
}
const BMW = createcar('BMW',2010, 'black');
console.log(BMW);
const Mercedes = createcar('Merceds',2010, 'red');
console.log(Mercedes);
const Fiat = createcar('Fiat',2010, 'white');
console.log(Fiat);
BMW.start();


// let's start in construction
// consrtuction is a function takes inputs
function Car(name, model, color){ // must be capitalized
  // this refear to this object (car)
  // if ther is no new will be window

  this.name = name;
  this.model = model;
  this.color = color;

  // methodos wrong way prototype better
  /*this.start = function(){
    console.log(`${this.name} engine start`)
  };
  this.stop = function(){
    console.log(`${this.name} engine stop`)
  };*/

}
Car.prototype.start = function(){
  // arrow function doesn't work here
  console.log(`${this.name} engine start`)
};
Car.prototype.stop= function(){
  console.log(`${this.name} engine stop`)
};
const siat = new Car('siat', 2019, 'red');
console.log(siat);
siat.start();
siat.stop();

// constructor goes to function making an object thin bind props to it
// all these obejcts are belongs to the big parent the car constructor
// (for methods) here with every created car all functions will be created and this waste of memory
// for this problem we will use prototype
