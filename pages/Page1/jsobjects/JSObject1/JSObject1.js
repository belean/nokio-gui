export default {
	push_template: (is_dirty, current_item) => {
		//if (is_dirty == true) return showAlert("Unable to apply template while transaction is changed!", "error");
		if (is_dirty == true) 
			return showModal("mdl_no_change");
		else 
			var item = (current_item === undefined) ? "" : current_item;
			showAlert("Applied current_item!", "info");
		return inp_transaction.setValue(JSON.stringify(item,null, 2));

	}
}