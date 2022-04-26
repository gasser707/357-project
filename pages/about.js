import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <ChakraProvider>
      <Box className={styles.container}>
        <Header />
        <MainMenu />

        <Box className={styles.page}>
          <Box className={styles.page_title}>About</Box>
          <Box className={styles.page_text}>
            &emsp;&emsp;This web application (ConU Class Finder) helps you locate a classroom at Concordia University. 
            Once you enter the necessary information, it displays a map of a floor in a building. 
            On this map, there is a path from an entry point to a classroom or washroom. 
            The white rooms with numbers are classrooms, the blue rooms are washrooms, and the green areas are entry points. 
            See the "How it Works" page for more information.
          </Box>
          <Box className={styles.page_text}>
            &emsp;&emsp;<u>Important Note:</u> Currently, the only available building is the "Henry F. Hall" building. 
            Other buildings will be added in the future! 
            Regarding the "Henry F. Hall" building, the floors above ground level (4 to 12) are mapped. 
            This is due to the fact that these floors contain most of the classrooms in the building and mapping would be of use there.
            These less needed floors may be added in the future upon student requests. 
            However, of these mapped "Henry F. Hall" building floors, floors 4, 6, and 7 are not yet mapped. 
            The reason for the exclusion of floor 4 is that it is under construction. 
            The reason for the exclusions of floors 6 and 7 is that they were recently renovated and Concordia University 
            has yet to send us the updated versions. Currently, they have provided us with PDF files of these floors 
            from 2010 and 2011 respectively.
          </Box>
          <Box className={styles.page_text}>
            &copy; 2022 ConU Class Finder
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
