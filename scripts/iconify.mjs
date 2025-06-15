// @ts-check
import { cleanupSVG, importDirectory, runSVGO } from "@iconify/tools";
import fs from "node:fs";

main();

async function main() {
  await generate("svg/aws", "aws");
  await generate("svg/google-cloud", "google-cloud");
  await generate("svg/supabase", "supabase");
  await generate("svg/withsy", "withsy");
}

/**
 * @param {string} path
 * @param {string} prefix
 */
async function generate(path, prefix) {
  const iconSet = await importDirectory(path, {
    prefix,
  });

  iconSet.forEach((name, type) => {
    if (type !== "icon") {
      return;
    }

    const svg = iconSet.toSVG(name);
    if (!svg) {
      iconSet.remove(name);
      return;
    }

    try {
      cleanupSVG(svg);
      // parseColors(svg, {
      //   defaultColor: "currentColor",
      //   callback: (_attr, colorStr, color) => {
      //     return !color || isEmptyColor(color) ? colorStr : "currentColor";
      //   },
      // });
      runSVGO(svg);
    } catch (err) {
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }

    iconSet.fromSVG(name, svg);
  });

  const exported = JSON.stringify(iconSet.export(), null, "\t") + "\n";
  await fs.promises.writeFile(
    `src/icons/${iconSet.prefix}.json`,
    exported,
    "utf8"
  );
}
