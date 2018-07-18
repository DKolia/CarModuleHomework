//// Goals:
//// Define a car
//// Give the car properties
//// Give the car methods (functions)
//// Export as module to index.js

module.car = {
  brand: "Pontiac",
  color: "red",
  convertible: false,
  speed: 0,

  function increaseSpeed {
    console.log("Speed is currently " + speed + " mph.");
    speed++
    console.log("Speed is increasing to... " + speed + " mph.");
  }


  function decreaseSpeed {
    console.log("Speed is currently " + speed + " mph.");
    speed--
    console.log("Speed is decreasing to... " + speed + " mph.");
  }
}

increaseSpeed()
increaseSpeed()
increaseSpeed()
decreaseSpeed()
console.log("End of Module");
