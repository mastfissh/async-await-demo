let resuilt
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

let audit = async function(data) {
  if (data.toLowerCase() == "need more credit"){
    console.log("AUDIT TRIGGERED!! TRIED TO BUY WITHOUT CREDIT")
  }
}

main = async function(){
  try{
    let customer = {
      name:"dave",
      credit: 40,
    }
    result = await creditCheck(50,customer)
    await audit(result)

    // // woops
    result = await creditCheck(50,customer)
    await audit(resuilt)


    // // soylent async is made of promises!!!
    // result = await creditCheck(50,customer)
    // audit(resuilt)

  } catch (err) {
    console.log("caught the error:")
    console.log("---")
    console.log(err.stack)
    console.log("---")
  }

}
main()
