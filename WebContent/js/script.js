function validateMenuItemForm() {
	var title = document.forms["menuItemForm"]["title"].value;
	var price = document.forms["menuItemForm"]["price"].value;
	var dateOfLaunch = document.forms["menuItemForm"]["dateOfLaunch"].value;
	var category = document.forms["menuItemForm"]["category"].value;
	if (title == "") {
		alert("Title is required.");
		return false;
	}
	else if (title.length < 2 || title.length > 65) {
		alert("Title should have 2 to 65 characters.");
		return false;
	}			
	else if (price == "") {
		alert("Price is required.");
		return false;
	}
	else if (isNaN(price)) {
		alert("Price has to be a number.");
		return false;
	}
	else if (dateOfLaunch == "") {
		alert("Date of Launch is required");
		return false;
	}			
	else if (category == "") {
		alert("Select one category");
		return false;
	}			
	else {
		return true;
	}
}

function validateLoginAdminForm() {
	var username = document.forms["loginAdminForm"]["username"].value;
	var password = document.forms["loginAdminForm"]["password"].value;
	if (username == "") {
		alert("Username is required");
		return false;
	}
	else if (password == "") {
		alert("Password is required");
		return false;
	}
	else if (username != "Aditya") {
		alert("Invalid Username");
		return false;
	}
	else if (password != "password") {
		alert("Invalid Password");
		return false;
	}
	else {
		return true;
	}
}

function validateLoginCustomerForm() {
	var username = document.forms["loginCustomerForm"]["username"].value;
	var password = document.forms["loginCustomerForm"]["password"].value;
	if (username == "") {
		alert("Username is required");
		return false;
	}
	else if (password == "") {
		alert("Password is required");
		return false;
	}
	else if (username != "Aditya") {
		alert("Invalid Username");
		return false;
	}
	else if (password != "password") {
		alert("Invalid Password");
		return false;
	}
	else {
		return true;
	}
}