import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.svg}>
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.339966 14V0H3.55997V11.24H7.25997V4H10.48V11.24H14.2V0H17.4V14H0.339966Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.par_big}>
            <span>ШТРАФОВ </span>НЕТ
          </p>
        </div>

        <p className={styles.par}>Получение информации о штрафе по УИН</p>

        <div className={styles.form}>
          <input className={styles.input} placeholder="Введите УИН" />
          <button className={styles.button}>Найти</button>
        </div>

        {/* <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Андрей Борисович пришёл учиться Next!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
