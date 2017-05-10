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



