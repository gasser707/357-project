import { useState } from "react";
import Head from "next/head";
import { ChakraProvider, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import MainSelectors from "../components/MainSelectors";
import MainMap from "../components/MainMap";

export default function Home() {
  const [floorData, setFloorData] = useState(null);
  const [visibility, setVisibility] = useState(false);

  return (
    <ChakraProvider>
      <Box className={styles.container}>
        <Head>
          <title>ConU Class Finder</title>
          <meta name="description" content="ConU Class Finder" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box className={styles.title}>ConU Class Finder</Box>

        <Box className={styles.main}>
          {!visibility && <MainSelectors setFloorData={setFloorData} setVisibility={setVisibility} />}
          {visibility && <MainMap floorData={floorData} setVisibility={setVisibility} />}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
