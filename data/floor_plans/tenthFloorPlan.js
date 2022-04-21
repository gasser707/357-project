import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const tenthFloorPoints = {};

// An array of edges used for the paths on the floor plan
const tenthFloorEdges = [];

// An object containing all the necessary data for the floor plan
const tenthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_10.svg",
  tenthFloorPoints,
  tenthFloorEdges,
);

export default tenthFloorPlan;
