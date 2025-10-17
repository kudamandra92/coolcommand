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
        <FiUser size={40} />
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiGrid size={30}/> <p>Dashboard</p>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiHome size={30}/> <p>Room</p>
            </a>
          </li>
          <li className={styles.list}>
            <a href="#" className={styles.link}>
              <FiBarChart2 size={30}/> <p>Analysis</p>
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <FiPlusSquare size={30}/> <p>Add Devices</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
