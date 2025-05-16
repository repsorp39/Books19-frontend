function isPasswordStrong(password){
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{8,}$/.test(password);
}

function isEmail(email){
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export { isEmail, isPasswordStrong };