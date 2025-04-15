import metabase from "../assets/screenshots/metabase.png";
import rudderstack from "../assets/screenshots/rudderstack.png";
import plausible from "../assets/screenshots/plausible.png";
import marimo from "../assets/screenshots/marimo.png";
import mixpanel from "../assets/screenshots/mixpanel.png";
import sqlmesh from "../assets/screenshots/sqlmesh.png";
import elementary from "../assets/screenshots/elementary.png";
import { motion } from "motion/react";

const images = [
  {
    tool: "Metabase",
    description: "Business intelligence",
    source: metabase.src,
  },
  {
    tool: "RudderStack",
    description: "Data pipelines",
    source: rudderstack.src,
  },
  {
    tool: "Plausible",
    description: "Web analytics",
    source: plausible.src,
  },
  {
    tool: "Python",
    description: "Data analysis",
    source: marimo.src,
  },
  {
    tool: "Mixpanel",
    description: "Product analytics",
    source: mixpanel.src,
  },
  {
    tool: "SQLMesh",
    description: "Data transformation",
    source: sqlmesh.src,
  },
  {
    tool: "Elementary",
    description: "Data observability",
    source: elementary.src,
  },
];
const duplicatedImages = [...images, ...images];

const imageWidth = 600;
const totalWidth = imageWidth * images.length;

export default function Screenshots() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: -totalWidth }}
        initial={{ x: 0 }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ width: `${duplicatedImages.length * imageWidth}px` }}
      >
        {duplicatedImages.map(({ tool, description, source }, index) => (
          <div
            key={`${index}-${tool}`}
            className="flex-shrink-0 px-2"
            style={{ width: `${imageWidth}px` }}
          >
            <img
              src={source}
              alt={`${tool} ${description}`}
              className="w-full h-auto border border-slate-300 rounded-lg"
            />
            <p className="text-sm mt-2">
              {description}
              <span className="text-slate-500"> • {tool}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
