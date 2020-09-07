import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <h1>The LORD</h1>
        <p>sdjklasjdlkajs</p>
        {/* <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
