import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const ninthFloorPoints = {};

// An array of edges used for the paths on the floor plan
const ninthFloorEdges = [];

// An object containing all the necessary data for the floor plan
const ninthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_9.svg",
  ninthFloorPoints,
  ninthFloorEdges,
);

export default ninthFloorPlan;
