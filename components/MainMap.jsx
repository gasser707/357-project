import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import IndoorMap from "./IndoorMap";

export default function MainMap({ floorData, setVisibility }) {
  const [selectedStartPoint, setSelectedStartPoint] = useState(floorData?.startPoint);
  const [selectedEndPoint, setSelectedEndPoint] = useState(
      floorData?.endPoint
    );
    
  return (
    floorData && (
      <Box
        maxWidth="100%"
        margin="2rem"
        display="flex"
        flexDirection="column"
        gap="2rem"
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{
                textDecoration: "none",
                cursor: "default",
              }}
            >
              {floorData.selectedBuilding}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{
                textDecoration: "none",
                cursor: "default",
              }}
            >
              {floorData.selectedFloor}th Floor
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              _hover={{
                textDecoration: "none",
                cursor: "default",
              }}
            >
              Room {selectedEndPoint}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box display="flex" gap="2rem" justifyContent="space-between">
          <Button
            onClick={() => {
              setSelectedStartPoint(null);
              setVisibility(false);
            }}
            width="5rem"
            maxWidth="100%"
            backgroundColor="lightgrey"
            _hover={{
              backgroundColor: "silver",
            }}
          >
            Back
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="blue"
              width="15rem"
            >
              {selectedStartPoint || "Change Start Point"}
            </MenuButton>
            <MenuList width="15rem" maxHeight="12rem" overflowY="scroll">
              {floorData.floorPlan?.startPoints &&
                Object.keys(floorData.floorPlan.startPoints).map((room) => (
                  <MenuItem
                    key={room}
                    height="2.3rem"
                    onClick={() => {
                      setSelectedStartPoint(room);
                    }}
                  >
                    {room}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        </Box>

        <IndoorMap
          floorPlan={floorData.floorPlan}
          startPoint={
            selectedStartPoint
              ? floorData.floorPlan?.startPoints[selectedStartPoint]
              : "ES"
          }
          endPoint={floorData.floorPlan?.endPoints[selectedEndPoint]}
        />

        <Box marginLeft="0.5rem" marginTop="-1.5rem">
          <Box textDecoration="underline">Legend</Box>
          <Box paddingLeft="0.5rem">
            <Box>Green (ES, EL, S): Entry points</Box>
            <Box lineHeight="1rem">Blue (B): Washroom</Box>
            <Box>Red (Thick line): Path</Box>
          </Box>
        </Box>

      </Box>
    )
  );
}
