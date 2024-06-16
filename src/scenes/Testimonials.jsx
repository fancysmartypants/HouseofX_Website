import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";




const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;


  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}

      >
        <p className="font-averia font-semibold text-4xl mb-5 text-primary-red mx-auto">
          PRESS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 text-xl font-averia">
          Here's What People are Saying.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8 mt-10">
        <motion.div
          className="mx-auto relative bg-primary-blue max-w-[500px] h-[1000px] flex flex-col justify-end p-16 mt-52
            before:relative before:top-[-70px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-averia text-6xl">"</p>
          <p className="font-averia text-center text-xl">
            <a href="https://loveandautism.com/event-program/" target="_blank" rel="noopener noreferrer"> 
            Rono is forging a unique path that highlights the intersection of seemingly disparate fields, demonstrating the uniqueness of career roadmaps for neurodiverse individuals, and importance of support to those navigating the complexities of multiple identities, thereby enhancing human understanding and driving societal progress. 
            </a>
          </p>
          <p className="font-averia mt-10 text-xl"> - LOVE & AUTISM 
          </p>
        </motion.div>

    
      </div>
    </section>
  );
};

export default Testimonials;
