var customerName = 'bob'
const leastFavoriteCustomer = 'James';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(newCustomer) {
  leastFavoriteCustomer = newCustomer;
}