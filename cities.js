const mississippiCities = [
  "Louisville", "Lucedale", "Ludlow", "Lumberton", "Macon",
  "Madison", "Magee", "Magnolia", "Mantachie", "Marion",
  "Marks", "Mccomb", "Mcneill", "Meadville", "Mendenhall",
  "Meridian", "Monticello", "Mooreville", "Moorhead", "Morton",
  "Moselle", "Moss Point", "Mount Olive", "Natchez", "Nesbit",
  "New Albany", "Newton", "Oakland", "Ocean Springs", "Okolona",
  "Olive Branch", "Oxford", "Paris", "Pascagoula", "Pass Christian",
  "Pearl", "Pelahatchie", "Perkinston", "Petal", "Pheba",
  "Philadelphia", "Picayune", "Pickens", "Plantersville", "Pontotoc",
  "Poplarville", "Port Gibson", "Potts Camp", "Prentiss", "Purvis",
  "Quitman", "Raleigh", "Randolph", "Raymond", "Red Banks",
  "Richland", "Richton", "Ridgeland", "Rienzi", "Ripley",
  "Rolling Fork", "Roxie", "Ruleville", "Saltillo", "Sardis",
  "Satartia", "Saucier", "Scobey", "Scott", "Sebastopol",
  "Seminary", "Senatobia", "Shaw", "Shubuta", "Silver Creek",
  "Smithdale", "Soso", "Southaven", "Star", "Starkville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < mississippiCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(mississippiCities[i]);
}

module.exports = { batches };
