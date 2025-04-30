import { motion } from "framer-motion";
import { featureCardVariants } from "../utils/animation-variants";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={featureCardVariants}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:bg-white/95 flex items-start"
    >
      <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-blue-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;