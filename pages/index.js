import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Short Url Microservice</title>
        <meta name="description" content="Microservice API to shorten url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Short Url Microservice</h1>

      <main className={styles.main}>
        <p className={styles.description}>Example Usage:</p>
        <span className={styles.span}>
          Send a <b>POST</b> request to the following url:
        </span>
        <code className={styles.code}>[project url]/api/shorturl</code>
        <span className={styles.span}>
          containing the url you want to shorten. Example:
        </span>
        <code className={styles.code}>
          {`{`}
          &quot;url&quot;:&quot;www.github.com/robdll&quot;
          {`}`}
        </code>

        <p className={styles.description}>Example Output:</p>
        <code className={styles.code}>
          {`{`}
          <br />
          &quot;original_url&quot;:&quot;www.github.com/robdll&quot;,
          <br />
          &quot;shorturl&quot;:&quot;1&quot;,
          <br />
          {`}`}
        </code>

        <p className={styles.description}>Try it out</p>
        <Link href="api/shorturl/1">
          <a className={styles.link}>/api/shorturl/1</a>
        </Link>
      </main>
    </div>
  );
}
