"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building, MapPin, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapAddress() {
  const [addressRef, addressInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      ref={addressRef}
      initial={{ opacity: 0, y: 50 }}
      animate={addressInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="py-20 px-4 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
            Visit Our Office
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Address */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={addressInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
              <Building className="h-6 w-6" />
              &nbsp; Terafence USA
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="leading-relaxed">
                  12788 ROYAL OAKS <br />
                  LN FARMERS BRANCH <br />
                  TX 75234
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <p>
                  <span className="font-medium">Email: </span>
                  <a
                    href="mailto:info@terafence.us"
                    className="text-blue-600 hover:underline"
                  >
                    info@terafence.us
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <p>
                  <span className="font-medium">Timings: </span>
                  09 AM to 06 PM (Monday to Friday)
                </p>
              </div>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://www.google.com/maps/place/Terafence+Private+Limited/@28.4082002,77.0703458,21z/data=!4m6!3m5!1s0x390d23d44fbfa2cf:0x7ca41bccd7a459b7!8m2!3d28.4082002!4d77.0703458!16s%2Fg%2F11v0b_jl0g?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <span>Get Directions</span>
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={addressInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.336805825529!2d-96.93399232433151!3d32.91569857360604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2871fccaeb23%3A0xe72b5cf9d1e3a925!2s12788%20Royal%20Oaks%20Ln%2C%20Farmers%20Branch%2C%20TX%2075234%2C%20USA!5e0!3m2!1sen!2sin!4v1743150746513!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Terafence US Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}