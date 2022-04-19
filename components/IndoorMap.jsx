import React, { useEffect, useRef } from "react";
import styles from '../styles/IndoorMap.module.css'

/**
 * A component that displays a floor plan and draws all possible paths given a start and endpoint
 * @param {Object} floorPlan - An object containing all the necessary floor plan information
 */
export default function IndoorMap({ floorPlan, startPoint, endPoint }) {
  const { svg, points, graph } = floorPlan;
  
  // Returns the position of the cursor (for finding points when building the floor plan)
  const getPosition = (e) => {
    console.log([
      Math.round((1000 * e.clientX) / window.screen.width),
      Math.round((1000 * e.clientY) / window.screen.height),
    ]);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    // Define the context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Define the path style
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FF0000";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    try {
      // If the start or end point does not exist, then throw an error
      if (
        !Object.keys(points).includes(startPoint) ||
        !Object.keys(points).includes(endPoint)
      ) {
        throw new Error("Invalid start or end point provided.");
      } else {
        // Draw the path between the start and end points
        ctx.beginPath();
        ctx.moveTo(...points[startPoint]);
        const path = graph.shortestPath(startPoint, endPoint);
        path.forEach((point) => ctx.lineTo(...points[`${point}`]));
        ctx.arc(...points[endPoint], 5, 0, 2 * Math.PI);
        ctx.stroke();
      }
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className={styles.indoor_map_container}>
      <img src={svg} alt="" className={styles.floor_plan} />
      <canvas
        width="1000"
        height="1000"
        ref={canvasRef}
        onClick={getPosition}
        className={styles.floor_canvas}
      />
    </div>
  );
}
