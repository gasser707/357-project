import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const eleventhFloorPoints = {};

// An array of edges used for the paths on the floor plan
const eleventhFloorEdges = [];

// An object containing all the necessary data for the floor plan
const eleventhFloorPlan = floorPlan(
  "/svgs/Floor_Plan_11.svg",
  eleventhFloorPoints,
  eleventhFloorEdges,
);

export default eleventhFloorPlan;
