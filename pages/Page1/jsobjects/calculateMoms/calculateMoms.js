export default {
	in_var: ["261", "262", "263"],
	out_var: ["264"],
	trans_data: [
		{
			"1930D": 10,
			"2610K": 10
		},
		{
			"1930D": 1000,
			"3000K": 800,
			"2610K": 200
		},
		{
			"1930K": 100,
			"8265D": 80,
			"2640D": 20
		},
		{	"1930K": 300,
		 "8265D": 240,
		 "2640D": 60}
	],

	myFun1 (in_var, out_var, trans_data) {
		// Take the IN-coming moms and substract the OUT-going moms
		// Return the result as bal
		//	write code here
		try {
			console.log("trans_data: ", this.trans_data)
			let sum_in_credit=0;
			let sum_in_debit=0;
			let sum_out_credit=0;
			let sum_out_debit=0;
			this.trans_data.forEach((item) => {
				//let trans_data_obj = JSON.parse(item);
				console.log("trans_data_obj: ", item);

				Object.entries(item|| {}).forEach(
					([k, v]) => {
						//console.log("types: ", typeof k, typeof v)
						//if(["1K", "2D", "3D", "4K", "5K", "6K", "7K","8K", "9K"].indexOf(account.slice(0,1) + account.slice(-1))>=0)
						if(this.in_var.indexOf(k.trim().slice(0,3))>=0){
							console.log("Found IN-coming value ", k, v);
							if(k.trim().slice(-1) == 'K')
								sum_in_credit += v;
							else if (k.trim().slice(-1) == 'D')
								sum_in_debit += v;
							else
								throw new Error("Unable to calculate Moms!, ", item)			
						} else if(this.out_var.indexOf(k.trim().slice(0,3))>=0) {
							console.log("Found OUT-coming value", k, v);
							if(k.trim().slice(-1) == 'K')
								sum_out_credit += v;
							else if (k.trim().slice(-1) == 'D')
								sum_out_debit += v;
							else
								throw new Error("Unable to calculate Moms!, ", item)	
						}
						//sum_credit+=v
						//else
						//sum_debit+=v
						//sum +=  this.mapper(k.trim()) * v;
					});
			});
			//console.log("credit=", credit, "debit", debit)
			//return (sum_debit - sum_credit).toFixed(2);
			return ((sum_out_credit - sum_out_debit) + (sum_in_credit - sum_in_debit) ).toFixed(2);
		} catch (error) {
			console.log("Error in get_transaction_sum", error)
			return false
		}
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}