let creditCheck = async function(amount, customer) {
  if (!customer) {
    throw new Error("missing customer!")
  }
  if (customer.credit > amount) {
    return ("ok for:"+ amount.toFixed(2))
  } else {
    return ("need more credit")
  }
}

main = async function(){
  try{
    let customer = {
      name:"dave",
      credit: 90,
    }
    console.log(await creditCheck(50,customer))
    customer = {
      name:"dave",
      credit: 40,
    }
    console.log(await creditCheck(50,customer));

    // Error conditions:

    // Expected:
    console.log(await creditCheck(50,null));

    // Unexpected
    console.log(await creditCheck(null,customer));

  } catch (err) {
    console.log("caught the error:")
    console.log("---")
    console.log(err.stack)
    console.log("---")
  }

}

main()
