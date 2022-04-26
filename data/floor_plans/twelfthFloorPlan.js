import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const floorPoints = {
  H_1236: [463, 309],
  H_1238: [466, 240],
  H_3732: [390, 189],
  H_1230: [340, 189],
  H_1235: [320, 189],
  H_S1285: [290, 189],
  H_S1275: [705, 189],
  H_1208: [464, 694],
  H_1213: [320, 810],
  H_1210: [360, 810],
  H_EL2: [690, 610],
  H_S1298: [740, 610],
  H_1292: [580, 610],
  H_1220: [165, 570],
  H_1228: [165, 332],
  H_EL1: [640, 610],
  H_EL5: [600, 310],
  H_1250: [835, 335],
  H_1252: [835, 425],
  H_1254: [835, 560],
  H_1269: [730, 810],
  H_1202: [645, 810],
  H_EL4: [600, 275],
  H_1241: [520, 189],
  H_1226: [165, 400],
  H_1224: [165, 480],
  H_1260: [650, 610],
  H_1271: [570, 810],
  H_1262: [565, 610],
  H_1243: [600, 189],
  H_1206: [464, 730],
  H_1286: [165, 656],
  H_1240: [560, 189],
  H_1263: [830, 765],
  H_S1290: [290, 810],
  H_1211: [385, 810],
  _1236: [488, 308],
  _1238: [489, 240],
  _1239: [465, 178],
  _1237: [390, 175],
  _1232: [390, 205],
  _1230: [340, 205],
  _1235: [320, 175],
  _1208: [490, 694],
  _1206: [490, 730],
  _1209: [464, 820],
  _1210: [360, 795],
  _1225: [120, 189],
  _1228: [283, 332],
  _1226: [180, 400],
  _1224: [180, 480],
  _1220: [180, 570],
  _1286: [180, 656],
  _1288: [255, 656],
  _1213: [320, 830],
  _1211: [385, 830],
  _1292: [580, 630],
  _1262: [565, 598],
  _1260: [650, 596],
  _1265: [840, 810],
  _1263: [840, 765],
  _1267: [835, 835],
  _1202: [645, 790],
  _1269: [730, 825],
  _1204: [570, 790],
  _1271: [570, 830],
  _1255: [880, 189],
  _1241: [520, 165],
  _1243: [600, 165],
  _1240: [560, 200],
  _1242: [600, 320],
  _1250: [800, 335],
  _1252: [800, 425],
  _1277: [680, 367],
  _1254: [800, 560],
  S1252: [680, 425],
  S1285: [290, 209],
  S1275: [705, 210],
  S1290: [290, 790],
  S1298: [740, 630],
  EL5: [620, 310],
  EL4: [615, 275],
  EL2: [690, 630],
  ES: [506, 384],
  ES_CON: [506, 384],
  ES_H: [464, 385],
  EL1: [640, 630],
  topMiddle: [464, 189],
  bottomLeft: [165, 810],
  bottomMiddle: [464, 810],
  middle: [464, 610],
  topLeft: [165, 189],
  topRight: [835, 189],
  bottomRight: [830, 810],
  middleRight: [830, 610],
};

// An array of edges used for the paths on the floor plan
const floorEdges = [
  ["ES", "ES_CON"],
  ["ES_CON", "ES_H"],
  ["ES_H", "H_1236"],
  ["ES_H", "H_1238"],
  ["topMiddle", "H_1238"],
  ["H_1236", "_1236"],
  ["H_1238", "_1238"],
  ["ES_H", "_1239"],
  ["ES_H", "topMiddle"],
  ["ES_H", "middle"],
  ["topMiddle", "topRight"],
  ["topMiddle", "topLeft"],
  ["H_1228", "topLeft"],
  ["H_1228", "_1228"],
  ["H_1228", "H_1226"],
  ["H_1224", "H_1226"],
  ["H_1224", "H_1220"],
  ["_1220", "H_1220"],
  ["_1226", "H_1226"],
  ["_1224", "H_1224"],
  ["H_1286", "H_1220"],
  ["H_1286", "bottomLeft"],
  ["H_1286", "_1286"],
  ["_1288", "_1286"],
  ["H_S1285", "topLeft"],
  ["H_S1285", "topMiddle"],
  ["H_S1285", "S1285"],
  ["topMiddle", "H_3732"],
  ["topMiddle", "H_1230"],
  ["topMiddle", "H_1235"],
  ["_1235", "H_1235"],
  ["H_1235", "H_1230"],
  ["_1230", "H_1230"],
  ["_1232", "H_3732"],
  ["_1237", "H_3732"],
  ["_1225", "topLeft"],
  ["topRight", "middleRight"],
  ["topRight", "_1255"],
  ["topRight", "_1267"],
  ["topRight", "H_1250"],
  ["topRight", "H_1252"],
  ["topRight", "H_1254"],
  ["H_1254", "_1254"],
  ["H_1250", "_1250"],
  ["H_1252", "_1252"],
  ["H_1252", "S1252"],
  ["S1252", "_1277"],
  ["middleRight", "bottomRight"],
  ["middleRight", "H_1263"],
  ["middleRight", "H_1260"],
  ["H_1260", "_1260"],
  ["H_1260", "H_EL1"],
  ["H_1260", "H_EL2"],
  ["H_1260", "H_1262"],
  ["middle", "H_1262"],
  ["middle", "H_1260"],
  ["middle", "H_1292"],
  ["middle", "H_EL1"],
  ["middle", "H_EL2"],
  ["middle", "H_S1298"],
  ["middle", "_1209"],
  ["middle", "bottomMiddle"],
  ["middle", "H_1208"],
  ["H_1206", "H_1208"],
  ["H_1208", "_1208"],
  ["H_1206", "_1206"],
  ["bottomMiddle", "H_1271"],
  ["H_1269", "H_1271"],
  ["middle", "middleRight"],
  ["bottomMiddle", "H_1210"],
  ["_1210", "H_1210"],
  ["bottomMiddle", "H_1211"],
  ["bottomMiddle", "H_1125"],
  ["H_1211", "_1211"],
  ["H_1211", "H_1213"],
  ["H_1213", "_1213"],
  ["H_1213", "H_S1290"],
  ["H_S1290", "S1290"],
  ["H_S1290", "bottomLeft"],
  ["H_S1290", "H_1210"],
  ["H_S1298", "S1298"],
  ["H_EL1", "EL1"],
  ["H_EL2", "EL2"],
  ["H_1292", "H_EL2"],
  ["H_1292", "H_EL1"],
  ["H_1292", "H_S1298"],
  ["H_1292", "_1292"],
  ["H_1262", "_1262"],
  ["bottomRight", "_1265"],
  ["bottomRight", "H_1269"],
  ["H_1269", "_1269"],
  ["H_1263", "_1263"],
  ["bottomRight", "H_1271"],
  ["H_1271", "_1271"],
  ["H_1271", "_1204"],
  ["bottomRight", "H_1202"],
  ["H_1202", "_1202"],
  ["topMiddle", "H_1241"],
  ["topMiddle", "H_1240"],
  ["H_1240", "_1240"],
  ["topMiddle", "H_1243"],
  ["topMiddle", "H_S1275"],
  ["H_S1275", "topRight"],
  ["H_S1275", "H_1240"],
  ["H_S1275", "S1275"],
  ["H_1243", "_1243"],
  ["H_1243", "_1242"],
  ["H_1243", "H_EL4"],
  ["H_1243", "H_EL5"],
  ["H_EL5", "EL5"],
  ["H_EL4", "EL4"],
  ["H_1241", "_1241"],
];

// An object of start points (used for the dropdown)
const floorStartPoints = {
  "Escalator": "ES",
  "Elevator (EL 1)": "EL1",
  "Elevator (EL 2)": "EL2",
  "Staircase (1285)": "S1285",
  "Staircase (1275)": "S1275",
  "Staircase (1290)": "S1290",
  "Staircase (1298)": "S1298",
};

// An object of end points (used for the dropdown)
const floorEndPoints = {
  1236: "_1236",
  1238: "_1238",
  1239: "_1239",
  1237: "_1237",
  1232: "_1232",
  1230: "_1230",
  1235: "_1235",
  1208: "_1208",
  1206: "_1206",
  1209: "_1209",
  1210: "_1210",
  1225: "_1225",
  1228: "_1228",
  1226: "_1226",
  1224: "_1224",
  1220: "_1220",
  1286: "_1286",
  1288: "_1288",
  1213: "_1213",
  1211: "_1211",
  1292: "_1292",
  1262: "_1262",
  1260: "_1260",
  1265: "_1265",
  1263: "_1263",
  1267: "_1267",
  1202: "_1202",
  1269: "_1269",
  1204: "_1204",
  1271: "_1271",
  1255: "_1255",
  1241: "_1241",
  1243: "_1243",
  1240: "_1240",
  1242: "_1242",
  1250: "_1250",
  1252: "_1252",
  1277: "_1277",
  1254: "_1254",
};

// An object containing all the necessary data for the floor plan
const twelfthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_12.svg",
  floorPoints,
  floorEdges,
  floorStartPoints,
  floorEndPoints
);

export default twelfthFloorPlan;
