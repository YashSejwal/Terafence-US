import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Building } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import RequiredLabel from "./RequiredLabel";
import { FormValues } from "../utils/form-schema";
import { inputVariants } from "../utils/animation-variants";

interface CompanyFieldsProps {
  form: UseFormReturn<FormValues>;
}

const CompanyFields = ({ form }: CompanyFieldsProps) => {
  return (
    <>
      {/* Company and Job Title with equal widths */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="sm:col-span-1">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  <RequiredLabel>Company Name</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                    className="relative"
                  >
                    <Input
                      placeholder="Your organization's name"
                      {...field}
                      className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-11 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder:text-gray-400"
                      style={{
                        backgroundColor: field.value ? "white" : "",
                      }}
                    />
                    <div className="absolute left-0 top-0 h-full w-9 flex items-center justify-center text-gray-400 border-r border-gray-200">
                      <Building className="h-4 w-4" />
                    </div>
                  </motion.div>
                </FormControl>
                <FormMessage className="text-red-500 text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>
        <div className="sm:col-span-1">
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  Job Title
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <Input
                      placeholder="Your designation"
                      {...field}
                      className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder:text-gray-400"
                      style={{
                        backgroundColor: field.value ? "white" : "",
                      }}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className="text-red-500 text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Business Segment dropdown with specific industry options - consistent height */}
      <FormField
        control={form.control}
        name="businessSegment"
        render={({ field }) => (
          <FormItem className="w-full mb-0">
            <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
              Business Segment
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger 
                  className={`border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-gray-50 text-sm ${field.value ? 'text-gray-900' : 'text-gray-500'}`}
                  style={{
                    backgroundColor: field.value ? "white" : "",
                  }}
                >
                  <SelectValue placeholder="Select business segment" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                <SelectItem value="it_software">IT & Software</SelectItem>
                <SelectItem value="power">Power</SelectItem>
                <SelectItem value="energy">Energy</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="defense">Defense</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="other">Others</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-red-500 text-xs mt-1" />
          </FormItem>
        )}
      />
    </>
  );
};

export default CompanyFields;