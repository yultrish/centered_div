console.log(" test our understanding of data types, data properties, and data methods")

// create and object
let maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
};

// turn that object created above into an array
maxArray = Object.values(maxSpeed)
console.log(maxArray)

//sort the array and console.log(results)
maxArraysorted = maxArray.sort((a,b)=>{
    return a - b
})
console.log(maxArraysorted)







