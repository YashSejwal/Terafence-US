import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md mb-3 flex items-start"
    >
      <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
      <span className="text-sm">{error}</span>
    </motion.div>
  );
};

export default ErrorDisplay;