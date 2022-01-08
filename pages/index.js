import Head from "next/head";
import { LeftNav, Feed } from "../components";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.app} >

      <Head>
        <title>Quote It! | Red Social de Frases</title>
      </Head>

      <LeftNav />
      <Feed />
      
    </div>
  )
}
