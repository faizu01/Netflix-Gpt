const validate = (email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[0-9])(?=.*?[A-Za-z])[A-Za-z0-9\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,32}$/.test(
      password
    );

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password should contain at least one Capital Letter and special character e.g (@ # * $)";
  else return null;
};

export default validate;
