console.log(" test our understanding of data types, data properties, and data methods")

// create an object
let maxSpeed = {
    airplane: 1000,
    car: 300,
    motorbike: 200,  
    bike: 60, 
    motorbike: 200, 
    helicopter: 400, 
};

// turn that object created above into an array
maxSpeedArray = Object.entries(maxSpeed)
console.log(maxSpeedArray)

//sort the array and console.log(results)
maxSpeedArraysortedKeys = maxSpeedArray.sort((a,b)=>{
    return a[0] - b[0]
})
console.log(maxSpeedArraysortedKeys)

maxSpeedArraysortedvalues = maxSpeedArray.sort((a,b)=>{
    return a[1] - b[1]
})

console.log(maxSpeedArraysortedvalues)







