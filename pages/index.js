import { useState } from "react";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import MainSelectors from "../components/MainSelectors";
import MainMap from "../components/MainMap";

export default function Home() {
  const [floorData, setFloorData] = useState(null);
  const [visibility, setVisibility] = useState(false);

  return (
    <ChakraProvider>
      <Box className={styles.container}>
        <Header />
        <MainMenu onClick={() => {
            setVisibility(false);
            setFloorData(null);
          }}
        />

        <Box className={styles.main}>
          {!visibility && <MainSelectors floorData={floorData} setFloorData={setFloorData} setVisibility={setVisibility} />}
          {visibility && <MainMap floorData={floorData} setVisibility={setVisibility} />}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
