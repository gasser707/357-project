import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const eighthFloorPoints = {};

// An array of edges used for the paths on the floor plan
const eighthFloorEdges = [];

// An object containing all the necessary data for the floor plan
const eighthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_8.svg",
  eighthFloorPoints,
  eighthFloorEdges,
);

export default eighthFloorPlan;
