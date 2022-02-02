let inputSuccess = document.getElementById("input-success");
let errMsg = document.getElementById("input-validation-msg");

inputSuccess.addEventListener("input", () => {
	let inputValue = inputSuccess.value;
	if (inputValue.length <= 0) {
		errMsg.innerText = "Please enter text";
		inputSuccess.style.border = "2px solid red";
		inputSuccess.style.boxShadow = "none";
		errMsg.style.color = "red";
	} else if (inputValue.length < 8) {
		errMsg.innerText = "Enter More than 8 characters";
		inputSuccess.style.border = "2px solid orange";
		inputSuccess.style.boxShadow = "none";
		errMsg.style.color = "orange";
	} else {
		errMsg.innerText = "Looks Good";
		inputSuccess.style.border = "2px solid green";
		inputSuccess.style.boxShadow = "none";
		errMsg.style.color = "green";
	}
});
