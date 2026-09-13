import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { FormValues } from "../utils/form-schema";
import { inputVariants } from "../utils/animation-variants";

interface DetailFieldProps {
  form: UseFormReturn<FormValues>;
}

const DetailField = ({ form }: DetailFieldProps) => {
  return (
    <>
      {/* Additional Details textarea - consistent with other fields */}
      <FormField
        control={form.control}
        name="additionalDetails"
        render={({ field }) => (
          <FormItem className="mb-0">
            <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
              Additional Details
            </FormLabel>
            <FormControl>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <Textarea
                  placeholder="Please provide any additional information about your requirements..."
                  className="min-h-[80px] max-h-[160px] resize-y border-gray-300 focus:border-blue-400 focus:ring-blue-200 rounded-lg shadow-sm p-3 bg-gray-50 text-gray-900 placeholder:text-gray-400"
                  style={{
                    backgroundColor: field.value ? "white" : "",
                  }}
                  {...field}
                />
              </motion.div>
            </FormControl>
            <FormMessage className="text-red-500 text-xs mt-1" />
          </FormItem>
        )}
      />

      {/* Privacy notice */}
      <div className="text-xs text-gray-600 mt-4 bg-gray-50 p-3 rounded-md border border-gray-100 shadow-inner">
        <p className="flex items-start">
          <span className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-0.5 flex-shrink-0">
            <AlertCircle className="h-3 w-3" />
          </span>
          Terafence USA Inc. requires the contact information you
          provide to send you updates about our products and services.
          You may unsubscribe from these communications at any time.
        </p>
      </div>
    </>
  );
};

export default DetailField;