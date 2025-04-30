import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import RequiredLabel from "./RequiredLabel";
import CountryCode from "../countrycode";
import { FormValues } from "../utils/form-schema";
import { inputVariants } from "../utils/animation-variants";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>;
}

const PersonalInfoFields = ({ form }: PersonalInfoFieldsProps) => {
  return (
    <>
      {/* Name fields with exact alignment and equal widths */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="sm:col-span-1">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  <RequiredLabel>First Name</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <Input
                      placeholder="your first name"
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
        <div className="sm:col-span-1">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  <RequiredLabel>Last Name</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <Input
                      placeholder="your last name"
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

      {/* Email field - with consistent height and alignment */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="mb-0">
            <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
              <RequiredLabel>Business Email</RequiredLabel>
            </FormLabel>
            <FormControl>
              <motion.div
                whileFocus="focus"
                variants={inputVariants}
                className="relative"
              >
                <Input
                  type="email"
                  placeholder="username@company.com"
                  {...field}
                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-11 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder:text-gray-400"
                  style={{
                    backgroundColor: field.value ? "white" : "",
                  }}
                />
                <div className="absolute left-0 top-0 h-full w-9 flex items-center justify-center text-gray-400 border-r border-gray-200">
                  <Mail className="h-4 w-4" />
                </div>
              </motion.div>
            </FormControl>
            <FormMessage className="text-red-500 text-xs mt-1" />
          </FormItem>
        )}
      />

      {/* Phone fields - Country Code and Phone Number with equal widths */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <div className="sm:col-span-1">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  <RequiredLabel>Country Code</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <CountryCode
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      className="w-full h-11 bg-gray-50"
                    />
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
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-0">
                <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                  <RequiredLabel>Business Phone</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                  >
                    <Input
                      placeholder="(123) 456-7890"
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
    </>
  );
};

export default PersonalInfoFields;