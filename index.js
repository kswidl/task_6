import { processLargeCsv } from "./src/streamProcessor.js";

async function main() {
  const result = await processLargeCsv("./data/sample.csv", 100);

  console.log("Result:");
  console.log("Orders:", result.count);
  console.log("Skipped:", result.skipped);
  console.log("Total:", result.total);
  console.log("Average:", result.average.toFixed(2));
}

main();