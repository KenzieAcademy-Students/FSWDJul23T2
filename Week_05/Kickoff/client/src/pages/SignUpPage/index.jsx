import { ControlledInput } from "../../components";
import "./SignUpPage.css";
import useSignupForm from "./useSignupForm";

function SignUpPage() {
  const { signupData, handleSubmit, errors, handleInputChange, resetData } =
    useSignupForm(true);

  return (
    <div className="container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <ControlledInput
          name="username"
          label="Username"
          value={signupData.username}
          onChange={handleInputChange}
          error={errors.username}
        />
        <ControlledInput
          type="password"
          name="password"
          label="Password"
          value={signupData.password}
          onChange={handleInputChange}
          error={errors.password}
        />
        <ControlledInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={signupData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
        />
        <input type="submit" value="Submit" />
        <br />
        <button type="button" onClick={resetData}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
