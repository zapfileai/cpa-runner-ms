const mississippiCities = [
  "Steens", "Stringer", "Summit", "Sumner", "Sumrall",
  "Sunflower", "Taylorsville", "Terry", "Tishomingo", "Toomsuba",
  "Tremont", "Tunica", "Tupelo", "Tylertown", "Union",
  "Utica", "Vancleave", "Verona", "Vicksburg", "Walls",
  "Walnut", "Walnut Grove", "Water Valley", "Waveland", "Waynesboro",
  "Webb", "Wesson", "West Point", "Wiggins", "Winona",
  "Winstonville", "Woodville", "Yazoo City",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < mississippiCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(mississippiCities[i]);
}

module.exports = { batches };
