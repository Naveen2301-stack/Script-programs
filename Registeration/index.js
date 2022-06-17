var form = document.getElementById("Register_form");
function sConsole(event) {
  event.preventDefault();
  var rname = document.form.name.value;
  var rmail = document.form.email.value;
  var rpass = document.form.pwd.value;
  var srpass = document.form.cpass.value;
  var fgender = document.form.Gender.value;
  var fsub = document.form.countries.value;
  var fmsg = document.form.msg.value;
  var int = new Array();
  var fint = document.getElementsByName("hobbies");
  for (var x of fint) {
    if (x.checked) {
      int.push(x.value);
    }
  }
  const message = function () {
    console.log(rname);
    console.log(rmail);
    console.log(rpass);
    console.log(srpass);
    console.log(fgender);
    console.log(int);
    console.log(fsub);
    console.log(fmsg);
  };
  setTimeout(message, 2000);
}

form.addEventListener("submit", sConsole);
