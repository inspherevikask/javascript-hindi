const accountId = 12345
let accountName = "vikas"
var accountCity ="Jaipur"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
  

accountPass ="Vikas12345"
accountCity ="Delhi"

// accountId = 2 // not allowed because it's const variables let change 
let accountState;
console.log(accountCity);
console.table([accountId, accountName, accountCity, accountPass, accountState]);






