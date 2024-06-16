import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 mb-50 md:mb-50">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-20 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-averia font-semibold text-4xl mb-5">
            SKILLS
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-averia">
            Rono, being dyslexic and autistic, learned to communicate through visual expressions before she learned how to speak. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="hover:filter hover:saturate-200 transition duration-400 relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-primary-yellow before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
                width="1000"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-25 gap-35">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-averia font-semibold text-5xl">Graphic Design</p>
              <p className="font-averia font-semibold text-3xl mt-20">
                Vector graphics, non-vector graphics, oil, acrylics, pastel on wood, canvas or paper...
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-20 font-averia">
          Since her kindergarten years in Shanghai, she has amazed everyone with her drawings, and now she is using the digital canvas to continue her expressions.
        
          </p>
        </motion.div>

     {/* EXPERIENCE */}
     <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-averia font-semibold text-5xl">Custom Solutions</p>
              <p className="font-averia font-semibold text-3xl mt-20">
                Conducting research and customizing a solution to your needs.
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-20 font-averia">
          Her most fluent language is science, a disciplined process through which she borrows to help businesses communicate the complex emotions of their brands with unparalleled clarity.
        
          </p>
        </motion.div>

    {/* EXPERIENCE */}
    <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-averia font-semibold text-5xl">Ideas</p>
              <p className="font-averia font-semibold text-3xl mt-32">
              Creating solutions with an emphasis on ethics and contents considering social and cultural impact.
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-20 font-averia">
            Rono has multicultural experiences across three different continents and she has worked in the largest bookstore in Los Angeles, and she is surrounded by brilliant people filled with tons of great ideas.
        
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MySkills;
