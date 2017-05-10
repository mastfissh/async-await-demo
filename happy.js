
let creditCheck = function(amount, customer) {
  if (!customer) {
    throw "missing customer!"
  }
  if (customer.credit > amount) {
    return ("ok for:"+ amount.toFixed(2))
  } else {
    return ("need more credit")
  }
}

let customer
try {
  customer = {
    name:"dave",
    credit: 90,
  }
  console.log(creditCheck(50,customer));

  customer = {
    name:"dave",
    credit: 40,
  }
  console.log(creditCheck(50,customer));


  // Error conditions:

  // Expected:
  console.log(creditCheck(50,null));

  // Unexpected
  console.log(creditCheck(null,customer));

} catch (e) {
  console.log("caught the error:")
  console.log("---")
  console.log(e.stack)
  console.log("---")
}
