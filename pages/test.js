import { useState } from "react";
import Head from "next/head";
import { ChakraProvider, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import MainSelectors from "../components/MainSelectors";
import MainMap from "../components/MainMap";
import IndoorMap from "../components/IndoorMap";
import tenthFloorPlan from "../data/floor_plans/tenthFloorPlan";
import fifthFloorPlan from "../data/floor_plans/fifthFloorPlan";

export default function Home() {
  const [floorData, setFloorData] = useState(null);
  const [visibility, setVisibility] = useState(false);

  return (
    <ChakraProvider>
      <Box >
      <IndoorMap
        floorPlan={tenthFloorPlan}
        startPoint={"ES"}
        endPoint={"1015"}
      />
      </Box>
    </ChakraProvider>
  );
}
