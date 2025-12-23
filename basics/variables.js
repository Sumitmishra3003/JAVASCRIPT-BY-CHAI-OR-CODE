const account_id = 4553
let account_email = "sumit@gmail.com"
var account_password = "12345"
account_city = "Jaipur"
let account_state  // it give undefine value.

account_email = "mishra@gmail.com"
account_city = "hyderabad"

console.table([account_id, account_email, account_password, account_city, account_state])

/* prefer not to use var because of scope issue */