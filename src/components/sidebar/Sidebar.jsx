import React from "react";
import styles from "./Sidebar.module.css";
import {
  FiGrid,
  FiHome,
  FiBarChart2,
  FiPlusSquare,
  FiUser,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarProfile}>
        <FiUser size={20} />
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiGrid /> <p>Dashboard</p>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiHome /> <p>Room</p>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiBarChart2 /> <p>Analysis</p>
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <FiPlusSquare /> <p>Add Devices</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
