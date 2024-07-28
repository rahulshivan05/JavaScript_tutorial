// yeh bus likhne ka tarike hai
// const accountID, account_id, accountId

const account_id = 145543;
let accountEmail = 'rahul@google.com';
var accountPassword = '1234'; // not used in today's era
accountCity = 'Delhi'; // aap aise bhi kar sakte ho lekin app jab node or bun me run karenga tab run hoga lekin *Deno* error dega
let accountState;

// account_id = 2 // aap const ki value ko update nahi kar sakhte ho

/**
 * Var ko ab ham use nahi karte hai q ki var ko pata nahi hai ki scopre. Scope problem with *Var*
 */

accountEmail = 'rahul@microsoft.com';
accountPassword = '21212122';
accountCity = 'Benguluru';

console.table([
	account_id,
	accountEmail,
	accountPassword,
	accountCity,
	accountState,
]);
