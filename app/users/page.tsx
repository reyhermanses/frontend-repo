import React from "react";
import styles from "../page.module.css";
import TableUser from "./TableUser";

const Users = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TableUser/>
      </div>
    </main>
  );
};

export default Users;
