import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const twelfthFloorPoints = {};

// An array of edges used for the paths on the floor plan
const twelfthFloorEdges = [];

// An object containing all the necessary data for the floor plan
const twelfthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_12.svg",
  twelfthFloorPoints,
  twelfthFloorEdges,
);

export default twelfthFloorPlan;
