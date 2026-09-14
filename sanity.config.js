import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";
import { structure } from "./deskStructure";

export default defineConfig({
  name: "hamed-portfolio",
  title: "Hamed Portfolio CMS",
  projectId: "h4g60wzb",
  dataset: "production",
  plugins: [
    deskTool({ structure }),
    visionTool(),
  ],
  schema: { types: schemas },
});
