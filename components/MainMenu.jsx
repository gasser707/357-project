import Link from "next/link";
import {
  ChakraProvider,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "../styles/Home.module.css";

export default function MainMenu({ onClick }) {
  return (
    <ChakraProvider>
      <Box className={styles.title}>
        <Menu>
          <MenuButton
            paddingLeft="0.5rem"
            as={Button}
            rightIcon={<HamburgerIcon />}
          />
          <MenuList>
            <MenuItem onClick={onClick}>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="how_it_works">How it Works</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box className={styles.title_text}>ConU Class Finder</Box>
      </Box>
    </ChakraProvider>
  );
}
