import { useReducer } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  data: {
    username: "",
    password: "",
  },
  errors: {
    username: "",
    password: "",
  },
  isSubmitting: false,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case "HANDLE_CHANGE": {
      const { name, value } = action.payload;
      newState.data[name] = value;
      return newState;
    }
    case "SET_ERRORS": {
      newState.errors = action.payload;
      return newState;
    }
    case "START_SUBMIT": {
      newState.isSubmitting = true;
      return newState;
    }
    case "END_SUBMIT": {
      newState.isSubmitting = false;
    }
    case "RESET_FORM": {
      newState.data = { username: "", password: "" };
      newState.errors = { username: "", password: "" };
      newState.isSubmitting = false;
      return newState;
    }
    default: {
      return state;
    }
  }
};

function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    dispatch({ type: "HANDLE_CHANGE", payload: e.target });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "START_SUBMIT" });

    try {
      await signIn(state.data.username, state.data.password);
      toast.success(`Sign in successful. Welcome, ${state.data.username}`);
      navigate("/dashboard");
    } catch (error) {
      dispatch({ type: "STOP_SUBMIT" });
    }
  };

  const handleReset = () => dispatch({ type: "RESET_FORM" });

  return (
    <Container>
      <h1>Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            value={state.data.username}
            isInvalid={state.errors.username}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={state.data.password}
            isInvalid={state.errors.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mt-2">
          <Button type="button" variant="info" onClick={handleReset}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;
