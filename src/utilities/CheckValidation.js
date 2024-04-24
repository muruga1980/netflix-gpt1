export const checkValidation = (name, email, password) => {
  const isUserNameValid = /^[a-zA-Z\s-]+$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isUserNameValid) return "User name is not valid";

  if (!isEmailValid) return "Email id is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
