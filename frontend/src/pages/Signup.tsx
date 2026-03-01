import { useState } from "react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Signup.module.css";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { session, signUpNewUser } = useAuth();
  console.log(session);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

      if (result?.success) {
        navigate("/projects");
      }
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Result:", result); 
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }


    // const loginForm = e.currentTarget;
    // const formData = new FormData(loginForm);
    // const username = formData.get("username");
    // const password = formData.get("password");
    // console.log(username);
    // console.log(password);
  };

  return (
    <>
      <title>Login screen</title>
      <div id="signupScreen" className={styles.signupScreen}>
        <form className={styles.signupForm} onSubmit={handleSignUp}>
          <h2 className={styles.signupHeading}>Sign Up</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.signupFormControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.signupFormControl}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button type="submit" className={styles.submitBtn}>
            Sign up
          </button>
          <p>
            Been here before?{" "}
            <Link to="/login" className={styles.signInBtn}>
              Login
            </Link>
          </p>
          {error && <p className={styles.signupErrorMessage}>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Signup;
