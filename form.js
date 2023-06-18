function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var password = document.forms["registrationForm"]["password"].value;

  // Regular expressions for validation //
  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!name.match(nameRegex)) {
    alert("Please enter a valid name.");
    return false;
  }

  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!password.match(passwordRegex)) {
    alert("Please enter a valid password. It must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).");
    return false;
  }

  return true;
}