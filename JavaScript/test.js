console.log(" test our understanding of data types, data properties, and data methods")

// create an object
let maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
};

// turn that object created above into an array
maxSpeedArray = Object.entries(maxSpeed)
console.log(maxArray)

//sort the array and console.log(results)
maxSpeedArraysorted = maxArray.sort((a,b)=>{
    return a[1] - b[1]
})
console.log(maxSpeedArraysorted)







