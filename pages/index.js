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
        <p className={styles.description}>How to use:</p>
        <span className={styles.span}>
          Send a <b>POST</b> request containing the url you want to shorten to
          the following url:
        </span>
        <code className={styles.code}>[project url]/api/shorturl</code>
        <p className={styles.span}>
          <b>NOTE:</b> the provided url need to match the following regex:
        </p>
        <code
          className={styles.code}
        >{`/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/`}</code>
        <p className={styles.description}>Example Body:</p>
        <code className={styles.code}>
          {`{`}
          &quot;url&quot;:&quot;https://robertodilillo.dev&quot;
          {`}`}
        </code>
        <p className={styles.description}>Example Response:</p>
        <code className={styles.code}>
          {`{`}
          <br />
          &quot;original_url&quot;:&quot;https://robertodilillo.dev&quot;,
          <br />
          &quot;shorturl&quot;:&quot;10&quot;,
          <br />
          {`}`}
        </code>
        <span className={styles.span}>
          Short url can is now available via <b>GET</b> request to the following
          url:
        </span>
        <Link href={`/api/shorturl/10`} passHref>
          <a className={styles.link}>[projectURL]/api/shorturl/10</a>
        </Link>
        <p className={styles.description}>Try it out</p>
        <form className={styles.form} action="/api/shorturl" method="post">
          <label htmlFor="original_url">Url: </label>
          <input
            className={styles.input}
            name="original_url"
            type="text"
            placeholder="Enter a url to shorten"
          />
          <button className={styles.btn} type="submit">
            POST URL
          </button>
        </form>
      </main>
    </div>
  );
}
