function sendform(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let batch = document.getElementById("batch").value;
  let hobby = document.querySelectorAll('input[name="hobby"]:checked');
  let hobbyValue = [];

  for (let i = 0; i < hobby.length; i++) {
    hobbyValue.push(hobby[i].value);
  }

  let output =
    "Name :" + name + "\n" +
    "Email :" +email + "\n" +
    "Password :" + password + "\n" +
    "Date of Birth:" +
     dob +
    "\n" +
    "Address :" +
    address +
    "\n" +
    "Gender :" +
    gender.value +
    "\n" +
    "Batch:" +
    batch ;


  let newWindow = window.open("", "_blank");
  newWindow.document.writeln("<pre>" + output + "</pre>");
}
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", sendform);
