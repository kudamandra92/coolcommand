import React from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/react.svg";

export default function Login() {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`${styles.bg} ${styles.wrap}`}>
      <section className={styles.card} aria-label="Sign in">
        <div className={styles.brand}>
          <img className={styles.logo} src={Logo} alt="CoolCommand" />
          <div>
            <h1 className={styles.heading}>Welcome back</h1>
            <p className={styles.sub}>Sign in to your account</p>
          </div>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Signed in! (wire your auth here)");
          }}
        >
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={styles.input}
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputWrap}>
              <input
                id="password"
                name="password"
                required
                placeholder="••••••••"
                className={styles.input}
                type={show ? "text" : "password"}
                autoComplete="current-password"
              />
              <span
                className={styles.toggle}
                onClick={() => setShow((s) => !s)}
                aria-live="polite"
              >
                {show ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className={styles.row}>
            <label className={styles.checkbox}>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a className={styles.link} href="#">
              Forgot password?
            </a>
          </div>

          <button className={styles.btn} type="submit">
            Sign in
          </button>

          <div className={styles.or}>or continue with</div>
          <button type="button" className={styles.btnGhost}>
            Google
          </button>
        </form>

        <div className={styles.footer}>
          Don’t have an account?{" "}
          <a className={styles.link} href="#">
            Create one
          </a>
        </div>
      </section>
    </div>
  );
}
