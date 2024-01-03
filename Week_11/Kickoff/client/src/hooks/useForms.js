import { useReducer } from "react";

const reducer = (state, action) => {
  const newState = structuredClone(state);
  switch (action.name) {
    case "START_FORM_SUBMIT": {
      newState.isSubmitting = true;
      return newState;
    }
    case "STOP_FORM_SUBMIT": {
      newState.isSubmitting = false;
      return newState;
    }
    case "HANDLE_INPUT_CHANGE": {
      const { name, value } = action.payload;
      newState.formData[name].value = value;
      return newState;
    }
    case "HANDLE_INPUT_CHECK": {
      const { name, checked } = action.payload;
      newState.formData[name].value = checked;
      return newState;
    }
    case "RESET_FORM": {
      for (const key of Object.keys(newState.formData)) {
        newState.formData[key].value = "";
        newState.formData[key].error = "";
      }
      newState.isSubmitting = false;
      return newState;
    }
    case "SET_ERRORS": {
      for (const key of Object.keys(action.payload)) {
        const msg = action.payload[key];
        newState.formData[key].error = msg;
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

function applyInitialStateFields(initialState, formFields) {
  for (const key of Object.keys(formFields)) {
    initialState.formData[key] = { value: "", error: "" };
  }

  return initialState;
}

const initialState = {
  formData: {},
  isSubmitting: false,
};

const useForms = (formFields) => {
  const [state, dispatch] = useReducer(
    reducer,
    applyInitialStateFields(initialState, formFields)
  );

  const startSubmit = () => dispatch({ name: "START_FORM_SUBMIT" });
  const stopSubmit = () => dispatch({ name: "STOP_FORM_SUBMIT" });
  const handleChange = (e) =>
    dispatch({ name: "HANDLE_INPUT_CHANGE", payload: e.target });
  const handleCheck = (e) =>
    dispatch({ name: "HANDLE_INPUT_CHECK", payload: e.target });
  const resetForm = () => dispatch({ name: "RESET_FORM" });

  return {
    ...state,
    startSubmit,
    stopSubmit,
    handleChange,
    handleCheck,
    resetForm,
    dispatch,
  };
};

export default useForms;
