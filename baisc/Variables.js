const accountId = 144553;
let accountEmail = "akash@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "akash@.com";
accountPassword = "21212121";
accountCity = "lahore";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
