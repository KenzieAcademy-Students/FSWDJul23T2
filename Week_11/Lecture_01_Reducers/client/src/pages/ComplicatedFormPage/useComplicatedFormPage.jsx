import { useReducer } from "react";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialState = {
  formData: structuredClone(initialFormState),
  errors: structuredClone(initialFormState),
  isSubmitting: false,
  isLoading: true,
  isFormValidated: false,
  showForm: false,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case "SET_ERRORS": {
      newState.errors = action.payload;
      newState.isFormValidated = true;
      newState.isSubmitting = false;
      return newState;
    }
    case "SUBMIT_SUCCESS": {
      newState.formData = structuredClone(initialFormState);
      newState.errors = structuredClone(initialFormState);
      newState.isSubmitting = false;
      newState.showForm = false;
      return newState;
    }
    case "HANDLE_FORM_CHANGE": {
      const { name, value } = action.payload;
      newState.formData[name] = value;
      return newState;
    }
    case "START_SUBMIT": {
      newState.errors = structuredClone(initialFormState);
      newState.isSubmitting = true;
      return newState;
    }
    case "STOP_LOAD": {
      newState.isLoading = false;
      return newState;
    }
    case "START_LOAD": {
      newState.isLoading = true;
      return newState;
    }
    case "SHOW_FORM": {
      newState.showForm = true;
      return newState;
    }
    case "HIDE_FORM": {
      newState.showForm = false;
      newState.formData = initialFormState;
      return newState;
    }
    default: {
      return state;
    }
  }
};

function useComplicatedFormPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateFormData = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    const { firstName, lastName, email, password, confirmPassword } =
      state.formData;

    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (firstName.length < 2 || firstName.length > 25) {
      errors.firstName = "First name must be between 2 and 25 characters";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    } else if (lastName.length < 2 || lastName.length > 25) {
      errors.lastName = "Last name must be between 2 and 25 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8 || password.length > 35) {
      errors.password = "Password must be between 8 and 35 characters";
    }

    if (!confirmPassword || confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    dispatch({ type: "SET_ERRORS", payload: errors });

    return !Object.keys(errors).some((key) => key !== "");
  };

  const handleChange = (e) =>
    dispatch({ type: "HANDLE_FORM_CHANGE", payload: e.target });

  return {
    state,
    dispatch,
    validateFormData,
    handleChange,
  };
}

export default useComplicatedFormPage;
