// utils/validation.js
export const validate = (form) => {
  const errs = {};
  if (!form.fullName.trim()) errs.fullName = "Full name is required";
  if (!form.email) {
    errs.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errs.email = "Invalid email format";
  }
  return errs;
};
