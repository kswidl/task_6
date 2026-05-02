import fs from "fs";
import readline from "readline";

export async function processLargeCsv(filePath) {
  const fileStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
  });

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isFirstLine = true;
  let total = 0;
  let count = 0;

  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false;
      continue;
    }

    const parts = line.split(",");
    const amount = Number(parts[2]);

    if (!Number.isNaN(amount)) {
      total += amount;
      count++;
    }
  }

  return {
    count,
    total,
    average: count > 0 ? total / count : 0,
  };
}