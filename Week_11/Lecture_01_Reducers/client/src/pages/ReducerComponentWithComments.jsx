import React, { useEffect, useReducer, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialState = {
  formData: initialFormState,
  errors: initialFormState,
  isSubmitting: false,
  isLoading: true,
  showForm: false,
};

/**
 * The reducer is a function that will accept two arguments:
 * 1. state
 * 2. action
 *
 * The action is the object passed into dispatch, and it should
 * always have a type property.
 *
 * The reducer function will primarily consist of a switch statement
 * that will switch based on the value of action.type
 *
 * Each case value should match a type of action dispatched by
 * the dispatch function
 */
const reducer = (state, action) => {
  /**
   * The first thing we should do is copy state
   */
  const newState = structuredClone(state);

  /**
   * Then, set up a switch statement that accepts
   * action.type as an argument
   */
  switch (action.type) {
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
      return newState;
    }
    default: {
      return state;
    }
  }
};

function ComplicatedFormPage() {
  /**
   * The useReducer hook function needs 2 arguments, unlike useState:
   * 1. A reducer function
   * 2. The initial value of state
   *
   * The useReducer hook function then returns an array with two
   * elements, like useState:
   * 1. The state getter
   * 2. A dispatch function that will accept an object with,
   *    at minimum, a property of `type`
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => dispatch({ type: "STOP_LOAD" }), 1000);
  }, []);

  if (state.isLoading)
    return (
      <Container>
        <h3>Loading, please wait...</h3>
      </Container>
    );

  return (
    <>
      <Container>
        <h1>So you want to create an account?</h1>
        <p>
          By creating an account, you'll be able to help save the planet through
          reducing, reusing, and recycling!
        </p>
        <Button onClick={() => dispatch({ type: "SHOW_FORM" })}>
          Create an Account
        </Button>
      </Container>
      <Modal
        show={state.showForm}
        onHide={() => dispatch({ type: "HIDE_FORM" })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Creat an Account</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ComplicatedFormPage;

// case "TOGGLE_IS_SUBMITTING": {
// }
// case "START_SUBMIT": {
// }
// case "STOP_SUBMIT": {
// }
// case "TOGGLE_IS_LOADING": {
// }

// case "TOGGLE_FORM": {
// }
