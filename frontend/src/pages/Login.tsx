import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import Reveal from "../components/Reveal";
import { useAuth } from "../context/AuthContext";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const { session, signInNewUser } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInNewUser(username, password);
      if (result?.success) {
        navigate("/projects");
      }
    } catch (err) {
      setError("An error occurred here");
    } finally {
      setLoading(false);
      setUser(true);
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
      <Reveal width="100%" delay={0.3}>
        <div id="loginScreen" className={styles.loginScreen}>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <h2 className={styles.signInHeading}>Login</h2>
            <input
              type="text"
              name="username"
              placeholder="Email"
              className={styles.formControl}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.formControl}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <label className={styles.checkBox}>
              <input
                type="checkbox"
                value="Remember me"
                id="rememberMe"
                name="rememberMe"
              />
              Remember me
            </label>
            <button type="submit" className={styles.submitBtn}>
              Sign in
            </button>
            <p>
              Are you new?{" "}
              <Link to="/signup" className={styles.signupLink}>
                Sign up
              </Link>
            </p>
            <button className={styles.googleSignupBtn}>
              Sign in with Google
            </button>
          </form>
        </div>
      </Reveal>
    </>
  );
};

export default Login;
