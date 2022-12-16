// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "peter"


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    window.bestCustomer = "not bob";
  }

  function overwriteBestCustomer() {
    window.bestCustomer = "maybe bob";
  }

 

  function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Mike";
  }


console.log(customerName);