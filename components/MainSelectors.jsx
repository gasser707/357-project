import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import fifthFloorPlan from "../data/floor_plans/fifthFloorPlan";
import eighthFloorPlan from "../data/floor_plans/eighthFloorPlan";
import ninthFloorPlan from "../data/floor_plans/ninthFloorPlan";
import tenthFloorPlan from "../data/floor_plans/tenthFloorPlan";
import eleventhFloorPlan from "../data/floor_plans/eleventhFloorPlan";
import twelfthFloorPlan from "../data/floor_plans/twelfthFloorPlan";

export default function MainSelectors({ floorData, setFloorData, setVisibility }) {
  const [selectedBuilding, setSelectedBuilding] = useState(floorData?.selectedBuilding);
  const [selectedFloor, setSelectedFloor] = useState(floorData?.selectedFloor);
  const [selectedRoom, setSelectedRoom] = useState(floorData?.endPoint);
  const [startPoint, setStartPoint] = useState(null);
  const [hallBuildingPlan, setHallBuildingPlan] = useState(null);
  
  const buildings = [
    "Henry F. Hall",
    "Eng, Comp Sci and Vis Arts",
    "Faubourg",
    "Grey Nuns",
    "Guy-De Maisonneuve",
    "J. W. McConnell (Library)",
    "John Molson",
    "Toronto-Dominion",
    "Visual Arts",
    "Others..."
  ];

  const hallBuildingFloors = [4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    switch (selectedFloor) {
      case 5:
        setHallBuildingPlan(fifthFloorPlan);
        break;
      case 8:
        setHallBuildingPlan(eighthFloorPlan);
        break;
      case 9:
        setHallBuildingPlan(ninthFloorPlan);
        break;
      case 10:
        setHallBuildingPlan(tenthFloorPlan);
        break;
      case 11:
        setHallBuildingPlan(eleventhFloorPlan);
        break;
      case 12:
        setHallBuildingPlan(twelfthFloorPlan);
        break;
      default:
        setHallBuildingPlan(null);
    }
  }, [selectedFloor]);

  return (
    <Box
      maxWidth="100%"
      margin="2rem"
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
    >
      <Box width="22.5rem" maxWidth="100%" textAlign="center" fontSize="1.1rem">
        Welcome, let us locate your classroom at Concordia University!
      </Box>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="blue"
          width="15rem"
          maxWidth="100%"
        >
          {`${selectedBuilding || "Select a"} Building`}
        </MenuButton>
        <MenuList width="15rem" maxHeight="12rem" overflowY="scroll">
          {buildings.map((building) =>
            building === "Henry F. Hall" ? (
              <MenuItem
                key={building}
                height="2.3rem"
                onClick={() => {
                  setSelectedBuilding(building);
                  setSelectedFloor(null);
                  setSelectedRoom(null);
                }}
              >
                {building}
              </MenuItem>
            ) : (
              <MenuItem key={building} height="2.3rem" isDisabled>
                {building}
              </MenuItem>
            )
          )}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="blue"
          isDisabled={!selectedBuilding}
          width="15rem"
          maxWidth="100%"
        >
          {selectedFloor ? `${selectedFloor}th Floor` : "Select a Floor"}
        </MenuButton>
        <MenuList width="15rem" maxHeight="12rem" overflowY="scroll">
          {hallBuildingFloors.map((floor) =>
            floor === 4 || floor === 6 || floor === 7 ? (
              <MenuItem key={floor} height="2.3rem" isDisabled>
                {floor}
              </MenuItem>
            ) : (
              <MenuItem
                key={floor}
                height="2.3rem"
                onClick={() => {
                  setSelectedFloor(floor);
                  setSelectedRoom(null);
                }}
              >
                {floor}
              </MenuItem>
            )
          )}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="blue"
          isDisabled={!selectedFloor}
          width="15rem"
          maxWidth="100%"
        >
          {selectedRoom ? `Room ${selectedRoom}` : "Select a Room"}
        </MenuButton>
        <MenuList width="15rem" maxHeight="12rem" overflowY="scroll">
          {hallBuildingPlan?.endPoints &&
            Object.keys(hallBuildingPlan.endPoints).map((room) => (
              <MenuItem
                key={room}
                height="2.3rem"
                onClick={() => {
                  setSelectedRoom(room);
                }}
              >
                {room}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>

      <Button
        onClick={() => {
          setFloorData({
            floorPlan: hallBuildingPlan,
            endPoint: selectedRoom,
            startPoint: startPoint,
            selectedBuilding,
            selectedFloor,
          });
          setVisibility(true);
        }}
        isDisabled={!selectedRoom}
        colorScheme="green"
        width="15rem"
        maxWidth="100%"
      >
        Find
      </Button>
    </Box>
  );
}
