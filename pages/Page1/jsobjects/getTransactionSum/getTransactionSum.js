export default {

	//test : { "1930D " : 220, " 1630K" : 12.33, "4430K":207.67	},
	//account : "2930K",
	get_transaction_sum: (submitted_item) => {
		// Calculates the sum of a transaction by correcting the number if debit or credit
		// The function returns with 2 decimal places 
		try {
			let sum = 0;
			let submitted_obj = JSON.parse(submitted_item);
			console.log("submitted_item: ", submitted_item)
			Object.entries(submitted_obj|| {}).forEach(
				([k, v]) => {
					//console.log("types: ", typeof k, typeof v)
					sum +=  this.mapper(k.trim()) * v;
				});
			return sum.toFixed(2);
		} catch (error) {
			console.log("Error in get_transaction_sum", error)
			return false
		}
	},
	mapper:(account)=>{
		//let a = account.trim();
		//console.log(account);
		// Check which account + sides should have a minus
		if(["1K", "2D", "3D", "4K", "5K", "6K", "7K","8K", "9K"].indexOf(account.slice(0,1) + account.slice(-1))>=0)
			return -1;
		else
			return 1;
	}
}