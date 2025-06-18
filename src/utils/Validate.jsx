export const checkValidData = (fullName, email, password) => {
  const errors = {};

  if (fullName !== undefined && fullName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = "Invalid email format.";
  }

  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};
