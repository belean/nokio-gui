export default {
	push_template: (current_item) => {
		//if (is_dirty == true) return showAlert("Unable to apply template while transaction is changed!", "error");
		var item = (current_item === undefined) ? "Select transaction or template" : current_item;
		showAlert("Applied current_item!", "info");
		return inp_transaction.setValue(JSON.stringify(item,null, 2));
	},
	is_input_dirty:(is_dirty) => {
		if (is_dirty == true) {
			showModal("mdl_no_change");
			return false
		} else
			return true;
	}
}
