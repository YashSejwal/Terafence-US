import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface FormSuccessProps {
  onReset: () => void;
}

const FormSuccess = ({ onReset }: FormSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center h-full flex flex-col justify-between items-center p-4 overflow-auto"
      style={{ maxHeight: "100%" }}
    >
      <div className="flex flex-col items-center justify-start w-full">
        <Image
          src="/images/terafence.png"
          alt="Terafence Logo"
          width={224}
          height={64}
          className="w-48 md:w-56 mb-12"
          priority
        />

        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Send className="h-7 w-7 text-green-600" />
        </div>

        <h2 className="text-3xl font-bold text-green-600 mb-12">
          Thank you for contacting us!
        </h2>

        <div className="w-full mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-gray-800 font-medium mb-4 text-2xl">
            Our team will get back to you shortly.
          </p>

          <div className="space-y-3 text-left">
            <p className="text-gray-700 text-base mb-12">
              We appreciate your interest in Terafence&lsquo;s security
              solutions. Our specialists will review your information
              and contact you to discuss how our hardware-enforced
              isolation technology can protect your infrastructure.
            </p>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <h4 className="text-blue-800 font-semibold mb-1 text-base">
                Next Steps
              </h4>
              <ul className="list-disc pl-4 text-gray-700 space-y-1 text-base">
                <li>Expect a response within 1-2 business days</li>
                <li>
                  Explore our resources section for more information
                </li>
                <li>Visit our case studies for industry examples</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onReset}
        variant="outline"
        className="border-blue-200 text-blue-700 hover:bg-blue-50 mt-4 font-medium px-4 text-sm"
      >
        Submit Another Request
      </Button>
    </motion.div>
  );
};

export default FormSuccess;