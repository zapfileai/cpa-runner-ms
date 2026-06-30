const mississippiCities = [
  "Aberdeen", "Amory", "Artesia", "Batesville", "Bay Saint Louis",
  "Bay Springs", "Belden", "Biloxi", "Booneville", "Brandon",
  "Brookhaven", "Byhalia", "Byram", "Canton", "Carriere",
  "Carrollton", "Clarksdale", "Cleveland", "Clinton", "Coldwater",
  "Collins", "Columbus", "Como", "Conehatta", "Corinth",
  "Crystal Springs", "Diamondhead", "Diberville", "Drew", "Ecru",
  "Ellisville", "Eupora", "Farrell", "Flora", "Florence",
  "Flowood", "Forest", "Foxworth", "French Camp", "Friars Point",
  "Fulton", "Gautier", "Georgetown", "Golden", "Greenville",
  "Greenwood", "Grenada", "Gulfport", "Guntown", "Harrisville",
  "Hattiesburg", "Hazlehurst", "Heidelberg", "Hernando", "Holcomb",
  "Hollandale", "Holly Springs", "Horn Lake", "Houston", "Hurley",
  "Indianola", "Inverness", "Isola", "Itta Bena", "Iuka",
  "Jackson", "Jayess", "Kosciusko", "Lake", "Lamar",
  "Lambert", "Lauderdale", "Laurel", "Lawrence", "Leakesville",
  "Leland", "Lena", "Lexington", "Liberty", "Long Beach",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < mississippiCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(mississippiCities[i]);
}

module.exports = { batches };
