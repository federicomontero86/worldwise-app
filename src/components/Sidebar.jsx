import { Outlet } from "react-router-dom";

import { AppNav, Footer, Logo } from "../components";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
