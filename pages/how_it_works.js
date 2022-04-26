import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function HowItWorks() {
  return (
    <ChakraProvider>
      <Box className={styles.container}>
        <Header />
        <MainMenu />

        <Box className={styles.page}>
          <Box className={styles.page_title}>How it Works</Box>
          <Box>
            <Box className={styles.page_text} marginBottom="1.5rem">
              &emsp;&emsp;This web application (ConU Class Finder) helps you locate a classroom at Concordia University. 
              Once you enter the necessary information, it displays a map of a floor in a building. 
              On this map, there is a path from an entry point to a classroom or washroom. 
              The white rooms with numbers are classrooms, the blue rooms are washrooms, and the green areas are entry points. 
              See the "About" page for more information.
            </Box>
            <Box className={styles.page_steps}>
              <b>To locate a classroom, perform the following steps on the "Home" page:</b>
            </Box>
            <Box className={styles.page_steps}>
              <b>1)</b> Select a Concordia University building from the first dropdown.
            </Box>
            <Box className={styles.page_steps}>
              <b>2)</b> Select a floor in this building from the second dropdown.
            </Box>
            <Box className={styles.page_steps}>
              <b>3)</b> Select a classroom on this floor from the third dropdown.
            </Box>
            <Box className={styles.page_steps}>
              <b>4)</b> Click the find button to locate this room.
            </Box>
            <Box className={styles.page_steps}>
              <b>5)</b> A map of the floor you selected will appear with a path displayed on it. 
              This path will lead you to the room you selected. 
              If you want to change the starting point, select a new starting point from the dropdown button above the map.
            </Box>
            <Box className={styles.page_steps}>
              <b>6)</b> If you would like to change the room or floor, click the back button above the map. 
              You will see the previous dropdown buttons along with your previous selections pre-filled.
            </Box>
          </Box>
          <Box className={styles.page_text}>
            &copy; 2022 ConU Class Finder
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
