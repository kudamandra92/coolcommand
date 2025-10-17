import React from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/react.svg";

export default function Login() {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`${styles.bg} ${styles.wrap}`}>
      <section className={styles.card} aria-label="Sign in">
        <div className={styles.brand}>
          <img className={styles.logo} src={Logo} alt="Cool Command" />
          <div className={styles.brand}>
            <h3>Login</h3>
            <h4 className={styles.sub}>Cool Command</h4>
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
            <label htmlFor="email">Username</label>
            <input
              id="email"
              name="email"
              type="text"
              required
              placeholder="NIK"
              className={styles.input}
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrap}>
              <input
                id="password"
                name="password"
                required
                placeholder="••••••••"
                className={styles.input}
                type="password"
                autoComplete="current-password"
              />
            </div>
          </div>

          <button className={styles.btn} type="submit">
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
}
