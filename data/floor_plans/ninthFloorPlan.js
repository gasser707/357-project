import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const floorPoints = {};

// An array of edges used for the paths on the floor plan
const floorEdges = [];

// An object of start points (used for the dropdown)
const floorStartPoints = {
  "Escalator (ES)": "",
  "Elevator (EL 1)": "",
  "Elevator (EL 2)": "",
  "Elevator (EL 5)": "",
  "Staircase (575)": "",
  "Staircase (585)": "",
  "Staircase (590)": "",
  "Staircase (598)": "",
}

// An object of end points (used for the dropdown)
const floorEndPoints = {}

// An object containing all the necessary data for the floor plan
const ninthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_9.svg",
  floorPoints,
  floorEdges,
  floorStartPoints,
  floorEndPoints,
);

export default ninthFloorPlan;
