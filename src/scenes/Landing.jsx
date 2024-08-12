import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { ReactComponent as HouseOutline } from "../assets/house-outline-yellow.svg"; // Adjust the path if needed



const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mt-20"
    >

      {/* IMAGE SECTION */}
      <div className="relative basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {/* <HouseOutline className="absolute inset-0 w-full h-full" 
          /> */}

          
        {isAboveLarge ? (
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-100 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
        ) : (
          <img
            alt="profile"
            className="z-10 mt-100 w-full max-w-[200px] md:max-w-[200px]"
            src="assets/profile-image.png"
          />
        )}
      
      </div>
      

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-6xl font-custom z-10 text-center md:text-start">
            X House 
  
          </h1>

          <p className="mt-20 mb-20 text-3xl text-center md:text-start font-averia italic">
            Where Data Science, Innovation, and Inclusivity Converge
          </p>

          <p className="mt-10 mb-7 text-xl text-center md:text-start font-averia">
            Welcome to X House, a dynamic hub for forward-thinking individuals in data science and machine learning, dedicated to creating a more inclusive and diverse future. We are committed to bridging the gap between society and technology, harnessing the art of data science to craft transformative solutions that drive business success and uplift communities—especially women, neurodiverse individuals, and minorities.
          </p>
          <p className="mb-10 mt-20 text-l text-center md:text-start font-averia">
            Initiated by Rono, a Master’s student with dual B.Sc. degrees in Neuroscience and Computational & Systems Biology with Honors from UCLA, X House stands at the cutting edge of applying advanced data science methodologies to real-world challenges. With a Master’s in Data Science in Biomedicine underway, Rono brings a unique combination of scientific expertise, creative problem-solving, and a deep passion for inclusivity to every initiative.
          </p>
          <p className="mb-10 mt-20 text-l text-center md:text-start font-averia">
            Our Learning Center is an integral part of our mission, offering insights, tutorials, and research designed to empower individuals and organizations from all backgrounds. We help you navigate the complexities of the digital age with confidence, ensuring that the future of technology is accessible to everyone.
          </p>

          <p className="mb-20 mt-20 text-m text-center md:text-start font-averia italic">
            Join us at X House, where data science meets creativity, inclusivity, and impact.
          </p>

        </motion.div>





        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <AnchorLink
            className="bg-primary-yellow text-deep-blue rounded-sm py-3 px-7 font-averia
              hover:bg-primary-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let's talk
          </AnchorLink>

          {/* <AnchorLink
            className="rounded-r-sm bg-primary-red py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-primary-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-averia">
              Let's talk.
            </div>
          </AnchorLink> */}
          
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
