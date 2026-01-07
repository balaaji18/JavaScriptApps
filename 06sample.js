//validation logic
function validate() {
  //request data gathering logic
  let uname = document.getElementById("usernamee").value;
  let pswd = document.getElementById("pswd").value;
  let cnfrmpaswd = document.getElementById("cnfrmpswd").value;
  let mobno = document.getElementById("phnno").value;
  let mailid = document.getElementById("mailid").value;
  /// regular expressions
  let regexp = /[a-z][A-Z]/;
  let regexp1 = /[0-9]{10}/;
  //validation logic
  if (uname == "") {
    alert("please enter username");
    return false;
  }
  if (pswd == "") {
    alert("please enter password");
    return false;
  }
  if (pswd.length < 8 || pswd.length > 12) {
    alert("password should be minimum 8 characters and maximum 12 chars");
    return false;
  }

  if (!regexp.test(pswd)) {
    alert("password should be combination of small and capital alphabets");
    return false;
  }
  if (cnfrmpaswd == "") {
    alert("please re-enter password");
    return false;
  }
  if (pswd != cnfrmpaswd) {
    alert("Passwords should match");
    return false;
  }
  if (mobno == "") {
    alert("Please enter Mob No.");
    return false;
  }
  if (!regexp1.test(mobno)) {
    alert("enter valid mobile number with 10 digits");
    return false;
  }
  if (mailid == "") {
    alert("Enter Email id");
    return false;
  }
  if (!mailid.includes(".com")) {
    alert("Enter valid email");
    return false;
  }
  return true;
}
