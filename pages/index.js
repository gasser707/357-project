import Head from 'next/head'
import styles from '../styles/Home.module.css'
import IndoorMap from "../components/IndoorMap";
import fifthFloorPlan from "../data/floor_plans/fifthFloorPlan";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>ConU Class Finder</title>
        <meta name="description" content="ConU Class Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          ConU Class Finder
        </h1>

        <IndoorMap
          floorPlan={fifthFloorPlan} // currently hardcoded
          startPoint="ES" // currently hardcoded
          endPoint="_515" // currently hardcoded
        />

      </main>
    </div>
  )
}
