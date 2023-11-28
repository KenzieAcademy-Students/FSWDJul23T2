import { useState } from "react";

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
};

const useSignupForm = (runValidationOnChange = false) => {
  const [signupData, setSignupData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  };

  const validateForm = () => {
    const { username, password, confirmPassword } = signupData;
    let isValid = true;
    const newErrors = { ...initialState };

    if (!username) {
      newErrors.username = "Username is required.";
      isValid = false;
    } else if (username.length < 4) {
      newErrors.username = "Username must be at least 4 characters.";
      isValid = false;
    } else if (username.length > 20) {
      newErrors.username = "Username cannot be longer than 20 characters.";
      isValid = false;
    }
    setErrors(newErrors);

    return isValid;
  };

  const handleInputChange = (e) => {
    if (runValidationOnChange) {
      validateForm();
    }
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const resetData = (e) => {
    setSignupData(initialState);
  };

  return {
    signupData,
    errors,
    handleSubmit,
    handleInputChange,
    resetData,
  };
};

export default useSignupForm;
