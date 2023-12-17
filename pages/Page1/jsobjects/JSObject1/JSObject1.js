export default {
		push_template: (is_dirty) => {
		//if (is_dirty == true) return showAlert("Unable to apply template while transaction is changed!", "error");
		if (is_dirty == true) return showModal("mdl_no_change");
		else return showAlert("Apply template!", "info");
	}
}