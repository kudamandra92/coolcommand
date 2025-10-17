import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <main className={styles.mainContent}></main>
    </div>
  );
}
