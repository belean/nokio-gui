export default {

	test : { "1930D" : 11, "1630K" : 11	},
	account : "2930K",
	get_transaction_sum: (submitted_item) => {
		// submitted_item.t_data	
		// return Object.values(this.test).reduce((a, b) => a + b, 0)
		let sum=0;
		Object.entries(this.test).forEach(
			([k, v]) => {
				console.log(k,"&", v);
				sum += this.mapper(k) * v);
			})
		return sum
	},
	mapper:(account)=>{
		//let a = account.trim();
		console.log(account);
		// Check which account + sides should have a minus
		if(["1K", "2D", "3D", "4K", "5K", "6K", "7K","8K", "9K"].indexOf(account.slice(0,1) + account.slice(-1))>=0)
			return -1;
		else
			return 1;
	}
}