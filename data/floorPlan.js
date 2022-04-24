import Graph from "graph-data-structure";

/**
 * Creates a floor object to hold all its data
 * @param {svg} svg - The svg of the indoor map
 * @param {Object} points - An object of all points and their coordinates (stored as Arrays)
 * @param {Array} edges - An array of all edges (stored as Arrays)
 * @returns {Object} - Object containing all of the above, including the Graph data structure, excluding the edges array
 */
const floorPlan = (svg, points, edges, startPoints, endPoints) => {
  // Create graph
  const graph = Graph();

  // Add nodes (points) to graph
  Object.keys(points).forEach((point) => graph.addNode(point));

  // Add edges to graph
  edges.forEach((edge) => graph.addEdge(...edge));

  // Prints the graph to get a visualization for testing
  console.log(graph.serialize());

  // Converts directed graph to undirected graph
  graph
    .serialize()
    .links.forEach((edge) => graph.addEdge(edge.target, edge.source));

  return {
    svg,
    points,
    graph,
    startPoints,
    endPoints
  };
};

export default floorPlan;
