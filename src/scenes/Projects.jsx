import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, url,subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={url} target="_blank" rel="noopener noreferrer" className={overlayStyles}>
        <p className="text-2xl font-averia">{title}</p>
        <p className="font-averia mt-7">{subtitle}</p>
      </a>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-25">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-averia font-semibold text-4xl">
            <span className="text-primary-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-xl font-averia">
          A growing list of projects. More is coming. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-primary-red
              max-w-[600px] max-h-[600px] text-2xl font-averia font-semibold"
          >
            VISUALS EXPERIENCES
          </div>


          
          <Project title="Rono Dumplings" url="https://ronoxia.wixsite.com/rono-dumplings" subtitle="A delivery only food brand."/>
          <Project title="RoBo Dumplings" url="https://fancysmartypants.github.io/RoBo-Dumplings-Website/" subtitle="A frozen dumplings brand."/>

          {/* ROW 2 */}
          <Project title="Neurodiversity Blog" url="https://ronoxxx.wixsite.com/lifeofxia" subtitle="Autism awareness."/>
          <Project title="Rock Paper Scissor" url="https://fancysmartypants.github.io/rock-paper-scissor-console-game/" subtitle="A digital childhood game."/>
          <Project title="Personal Website" url="https://ronoxxx.wixsite.com/ronoxia/art" subtitle="Showcasing works of art." />

          {/* ROW 3 */}
          <Project title="IG Reel" url="https://www.instagram.com/reel/CYIKy9yJHJC/?igsh=MTc4MmM1YmI2Ng%3D%3D" subtitle="Egg nog recipe."/>
          <Project title="Content writing" url="https://jchenwan5.wixsite.com/digitalmindfulness/projects-8" subtitle=""/>

          <div
            className="flex justify-center text-center items-center p-10 bg-primary-blue
              max-w-[600px] max-h-[600px] text-2xl font-averia font-semibold"
          >
            MEANINGFUL DESIGNS
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
