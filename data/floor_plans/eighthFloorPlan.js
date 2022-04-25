import floorPlan from "../floorPlan";

// An object of points used for the paths on the floor plan
const floorPoints = {
  _801: [822, 825],
  _803: [720, 825],
  _802: [630, 825],
  _807: [540, 825],
  BottomMiddle: [450, 825],
  _810: [360, 825],
  _811: [360, 825],
  _813: [270, 825],
  S890: [270, 825],
  _815: [160, 825],
  _817: [160, 825],
  _819: [160, 825],
  _821: [160, 705],
  _823: [160, 597],
  _820: [160, 550],
  _825: [160, 502],
  _822: [160, 404],
  _827: [160, 404],
  _829: [160, 180],
  _831: [160, 180],
  _833: [160, 180],
  _835: [271, 180],
  S885: [271, 180],
  _837: [363, 180],
  _832: [363, 180],
  TopMiddle: [450, 180],
  _841: [538, 180],
  _843: [605, 180],
  _881: [605, 180],
  //bellow links to _881
  EL5: [603, 301],
  EL4: [603, 262],
  ///////////
  S875: [718, 180],
  _845: [718, 180],
  _847: [834, 180],
  _849: [834, 180],
  _853: [834, 327],
  _852: [834, 327],
  _854: [834, 403],
  _855: [834, 403],
  _857: [834, 504],
  //links to S898 corridor
  _859: [834, 619],
  ///////
  _861: [834, 704],
  _863: [834, 825],
  _865: [834, 825],
  //links to 801
  _867: [834, 825],
  ////
  //Middle
  MiddleMiddle: [450, 620],
  CenterMiddle: [450, 373],
  ES: [522, 373],
  ////

  //Second middle corridor
  _892: [582, 620],
  EL1: [642, 620],
  _862: [642, 620],
  EL2: [690, 620],
  S898: [744, 620],
  ///

};

// An array of edges used for the paths on the floor plan
const floorEdges = [
  ["_801","_803"],
  ["_803","_802"],
  ["_802","_807"],
  ["_807","BottomMiddle"],
  ["BottomMiddle","_810"],
  ["_810","_811"],
  ["_811","S890"],
  ["S890","_813"],
  ["_813","_815"],
  ["_815","_817"],
  ["_817","_819"],
  ["_819","_821"],
  ["_821","_823"],
  ["_823","_820"],
  ["_820","_825"],
  ["_825","_827"],
  ["_827","_822"],
  ["_822","_829"],
  ["_829","_831"],
  ["_831","_833"],
  ["_833","_835"],
  ["_835","S885"],
  ["S885","_837"],
  ["_837","_832"],
  ["_832","TopMiddle"],
  ["TopMiddle","_841"],
  ["_841","_843"],
  ["_843","_881"],
  //
  ["EL5","EL4"],
  ["EL4","_881"],
  ///
  ["_881","_845"],
  ["_845","S875"],
  ["S875","_847"],
  ["_847","_849"],
  ["_849","_853"],
  ["_853","_852"],
  ["_852","_854"],
  ["_854","_855"],
  ["_855","_857"],
  ["_857","_859"],
  ["_859","_861"],
  ["_861","_863"],
  ["_863","_865"],
  ["_865","_867"],
  ["_867","_801"],
  //ES 
  ["BottomMiddle","MiddleMiddle"],
  ["MiddleMiddle","CenterMiddle"],
  ["CenterMiddle","ES"],
  ["CenterMiddle","TopMiddle"],
  ///
  //Second middle corridor
  ["MiddleMiddle","_892"],
  ["_892","EL1"],
  ["EL1","_862"],
  ["_862","EL2"],
  ["EL2","S898"],
  ["S898","_859"],
  ///

];

// An object of start points (used for the dropdown)
const floorStartPoints = {
  "Escalator": "ES",
  "Elevator (General-1)": "EL1",
  "Elevator (General-2)": "EL2",
  "Elevator (Handicap)": "EL5",
  "Staircase (875)": "S875",
  "Staircase (885)": "S885",
  "Staircase (890)": "S890",
  "Staircase (898)": "S898",
}

// An object of end points (used for the dropdown)
const floorEndPoints = {
  801: "_801",
  803: "_803",
  802: "_802",
  807: "_807",
  810: "_810",
  811: "_811",
  813: "_813",
  815: "_815",
  817: "_817",
  819: "_819",
  821: "_821",
  823: "_823",
  820: "_820",
  825: "_825",
  822: "_822",
  827: "_827",
  829: "_829",
  831: "_831",
  833: "_833",
  835: "_835",
  837: "_837",
  832: "_832",
  841: "_841",
  843: "_843",
  881: "_881",
  45: "_845",
  847: "_847",
  849: "_849",
  853:"_853",
  852: "852",
  854: "_854",
  855: "_855",
  857: "_857",
  859: "_859",
  861: "_861",
  863: "_863",
  865: "_865",
  867: "_867",
  892: "_892",
  862: "_862",
}

// An object containing all the necessary data for the floor plan
const eighthFloorPlan = floorPlan(
  "/svgs/Floor_Plan_8.svg",
  floorPoints,
  floorEdges,
  floorStartPoints,
  floorEndPoints,
);

export default eighthFloorPlan;
