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

        <div className="mt-20 xs:mt-20 md:mt-0">
          {isAboveLarge ? (
            <div
              className="hover:filter hover:saturate-200 transition duration-400 relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-primary-yellow before:z-[-1]"
            >
              <img
              alt="A blue lizard illustration created on Procreate"
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
      <div className="md:flex md:justify-between xs:gap-10 md:gap-10 mt-28 gap-45 ">
        {/* Graphic Design */}
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
              <h1 className="font-averia font-semibold text-5xl">Innovative Problem-Solving</h1>
              <p className="font-averia font-semibold text-3xl mt-25">
                Rono’s unique perspective as someone who is both dyslexic and autistic has shaped her ability to communicate complex ideas through visual and scientific expressions. Starting with visual storytelling, she has evolved this skill into a sophisticated approach to problem-solving in data science and machine learning.
              </p>
            </div>
      
          </div>
          {/* <p className="mt-20 font-averia">
          Since her kindergarten years in Shanghai, her drawings have captivated audiences. Today she brings her creativity to life on the digital canvas. 
        
          </p> */}
        </motion.div>

     {/* Custom Solutions */}
     <motion.div
          className="md:w-1/3 mt-20"
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
              <h1 className="font-averia font-semibold text-5xl">Data Science Solutions</h1>
              <p className="font-averia font-semibold text-3xl mt-25">
              Rono excels in delivering tailored research and machine learning solutions designed to meet the specific needs of organizations. With a solid foundation in systems biology and extensive experience in data-driven environments, she has designed advanced content management systems, skill-tracking platforms, and inventory systems that enhance operational efficiency and strategic decision-making.
              </p>
            </div>
   
          </div>
          {/* <p className="mt-20 font-averia">
          Her most fluent language is science, a disciplined approach she leverages to use research, hypothesis and data to help businesses clearly express the complex emotions of their brands. With a background in systems biology, she brings a unique perspective to designing content management systems, skill tracking systems, and inventory systems to help businesses smoothly integrate their operations and maintain precise control over their assets.
          </p> */}
        </motion.div>

    {/* Ideas */}
    <motion.div
          className="md:w-1/3 mt-20"
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
              <h1 className="font-averia font-semibold text-5xl mt-10">Ethical and Impactful Innovation</h1>
              <p className="font-averia font-semibold text-3xl mt-25">
                Rono is deeply committed to creating technologically advanced yet ethically sound solutions. With multicultural experiences across three continents and a rich professional background, including her work at the largest bookstore in Los Angeles, she brings a global perspective and an ethical framework to every project. Her passion for ethical AI and the societal implications of technology ensures that her solutions are as culturally aware as they are innovative.
              </p>
            </div>
     
          </div>
          {/* <p className="mt-20 font-averia">
            Rono is deeply committed to creating technologically advanced yet ethically sound solutions. With multicultural experiences across three continents and a rich professional background, including her work at the largest bookstore in Los Angeles, she brings a global perspective and an ethical framework to every project. Her passion for ethical AI and the societal implications of technology ensures that her solutions are as culturally aware as they are innovative.
          </p> */}
        </motion.div>

      </div>
    </section>
  );
};

export default MySkills;
