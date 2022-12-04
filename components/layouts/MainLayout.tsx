import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../NavBar";

import styles from "./MainLayout.module.css";

export const MainLayout:FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>demo1 - home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
