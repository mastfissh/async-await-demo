let resuilt

let creditCheck = function(amount, customer) {
  return new Promise((resolve, reject) => {
    if (!customer) {
      reject(new Error("missing customer!"))
    }
    if (customer.credit > amount) {
      resolve("ok for:"+ amount.toFixed(2))
    } else {
      resolve("need more credit")
    }
  })
}
































let audit = function(data) {
  return new Promise((resolve, reject) => {
    if (data.toLowerCase() == "need more credit"){
      console.log("AUDIT TRIGGERED!! TRIED TO BUY WITHOUT CREDIT")
    }
    resolve()
  })
}

customer = {
  name:"dave",
  credit: 40,
}
creditCheck(50,customer).then(function(result){
  audit(result)
  return (result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})



creditCheck(50,customer).then(function(result){
  // woops!
  audit(resuilt)
  return (result)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})

// fixed (or at least)
creditCheck(50,customer).then(function(result){
  return audit(resuilt)
}).catch(function(err){
  console.log("caught the error:")
  console.log("---")
  console.log(err.stack)
  console.log("---")
})
