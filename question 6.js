let paymentMethod = "paypal" 
switch(paymentMethod){
    case "credit" : console.log("credit have processing fees of 2%")
    break;
    case "debit" : console.log("debit have processing fees of 1.5%")
    break;
    case "paypal": console.log("paypal have processing fees of 3%")
    break;
    default: console.log("wrong payment method !!")
}