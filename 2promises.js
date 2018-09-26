// Wrap the legacy credit check code in a promise
let creditCheck = function(amount, customer) {
  return new Promise((resolve, reject) => {
    legacyCreditCheck(amount, customer, function(err, result){
      if (err){
        reject(err);
      }
      else{
        resolve(result);
      }
    })
  })
}

// Pretend we have to do a network call here, or access a database
let legacyCreditCheck = function(amount, customer, callback) {
  if (!customer) {
    callback(new Error("missing customer!"),null)
  }
  if (customer.credit > amount) {
    callback(null,"ok for:"+ amount.toFixed(2))
  } else {
    callback(null,"need more credit")
  }
}


let customer

customer = {
  name:"dave",
  credit: 90,
}
creditCheck(50,customer).then(function(result){
  console.log(result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})

customer = {
  name:"dave",
  credit: 40,
}

creditCheck(50,customer).then(function(result){
  console.log(result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})

creditCheck(50,null).then(function(result){
  console.log(result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})

creditCheck(null,customer).then(function(result){
  console.log(result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})



