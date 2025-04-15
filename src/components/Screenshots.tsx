import { motion } from "motion/react";

const images = [
  {
    tool: "Metabase",
    description: "Business intelligence",
    source: "/src/assets/screenshots/metabase.png",
  },
  {
    tool: "RudderStack",
    description: "Data pipelines",
    source: "/src/assets/screenshots/rudderstack.png",
  },
  {
    tool: "Plausible",
    description: "Web analytics",
    source: "/src/assets/screenshots/plausible.png",
  },
  {
    tool: "Python",
    description: "Data analysis",
    source: "/src/assets/screenshots/marimo.png",
  },
  {
    tool: "Mixpanel",
    description: "Product analytics",
    source: "/src/assets/screenshots/mixpanel.png",
  },
  {
    tool: "SQLMesh",
    description: "Data transformation",
    source: "/src/assets/screenshots/sqlmesh.png",
  },
  {
    tool: "Elementary",
    description: "Data observability",
    source: "/src/assets/screenshots/elementary.png",
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
