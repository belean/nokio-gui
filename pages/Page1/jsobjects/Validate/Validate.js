export default {
	//t_data: {"1930K": 22, "1630D":22},
	//t_data:null,

	//a_list:["1930", "1630", "8265"],
	//this.a_list.indexOf(k.trim().slice(0,4)) >=0

	get_validation: (submitted_item) => {
		// Validate key and values and return false if any 
		try {
			let submitted_obj=JSON.parse(submitted_item);

			let is_validated= true;
			//console.log("Evaluating...Got: ", submitted_obj)

			if(Object.keys(submitted_obj||{}).length === 0){
				//console.log("Empty object, returning false")
				return false
			}

			const re=/^\d{4}[kKdD]$/
			Object.entries(submitted_obj).forEach(
				([k, v]) => {
					//console.log("types: ", typeof k, typeof v)
					if (!(re.test(k.trim()) && typeof v == 'number' && !isNaN(v))) {
						//console.log("types: ", typeof k, typeof v)
						is_validated = false;
					}
				});

			return is_validated;
		} catch (error) {
			return false
		} 
	},
}