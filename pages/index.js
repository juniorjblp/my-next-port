import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next Port</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h4 className={styles.siteUnder}>Web Site Under Construction</h4>
        <h1 className={styles.title}>
          Welcome to <a href="https://juniorjblp.cf">My Next Port!</a>
        </h1>

        <p className={styles.description}>
        <code className={styles.code}>My Next Port is a personal website developed 
        in Nextjs</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/juniorjblp/my-next-port" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://github.com/juniorjblp/my-next-port" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about the project codes and use files in your project</p>
          </a>

          <a
            href="https://github.com/juniorjblp/my-next-port"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy this example on your code.</p>
          </a>

          <a
            href="https://github.com/juniorjblp/my-next-port"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your project with this source code.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/juniorjblp/my-next-port"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed with{' '}
          <img src="img/nextLogo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
          {''} by {''} <a href="https://github.com/juniorjblp"> Junior Sousa</a>
      </footer>
    </div>
  )
}
