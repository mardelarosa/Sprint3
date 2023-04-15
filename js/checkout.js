// Exercise 7
function validate() {


	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");

	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");

	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Regular Expression
	const regExpName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i; 
	//const regExpLastN = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i; 
	const regExpEmail = /^[-'a-zA-Z0-9_+]+@[-'a-zA-Z0-9_+]+\.[a-z]{2,3}$/i; 
	const regExpPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/  
	const regExpAddress = /^.{3,}$/;
	const regExPhone = /^\d{9}$/; 

	const validation = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];

	const regExpTest = [regExpName, regExpEmail, regExpAddress, regExpName, regExpPass, regExPhone];

	const errors = [errorName, errorEmail, errorAddress, errorLastN, errorPassword, errorPhone];


	// Validate fields entered by the user: name, phone, password, and email


	for (let i = 0; i < 6; i++) {

		if (validation[i].value == "" || regExpTest[i].test(validation[i].value) == false) {


			validation[i].classList.add("is-invalid");
			validation[i].classList.remove("is-valid");


			/*errors[i].style.display = "block";
			validation[i].style.borderColor = "red";*/




		} else {
			validation[i].classList.add("is-valid");
			validation[i].classList.remove("is-invalid");


			/*errors[i].style.display = " none";
			validation[i].style.borderColor = "green";*/

		}


	}



	console.log(errors);
	console.log(validation);
	console.log(regExpTest);

}