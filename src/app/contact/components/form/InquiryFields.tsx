import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormValues } from "../utils/form-schema";

interface InquiryFieldsProps {
  form: UseFormReturn<FormValues>;
}

const InquiryFields = ({ form }: InquiryFieldsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
      <div className="sm:col-span-1">
        <FormField
          control={form.control}
          name="helpType"
          render={({ field }) => (
            <FormItem className="mb-0 w-full">
              <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                How Can We Help?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={`border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-gray-50 text-sm ${
                      field.value ? "text-gray-900" : "text-gray-500"
                    }`}
                    style={{
                      backgroundColor: field.value ? "white" : "",
                    }}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                  <SelectItem value="product-info">
                    Product Information
                  </SelectItem>
                  <SelectItem value="quote">Request a Quote</SelectItem>
                  <SelectItem value="demo">Request a Demo</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">
                    Partnership Inquiry
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
      </div>

      <div className="sm:col-span-1">
        <FormField
          control={form.control}
          name="referralSource"
          render={({ field }) => (
            <FormItem className="mb-0 w-full">
              <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                How Did You Hear?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={`border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-gray-50 text-sm ${
                      field.value ? "text-gray-900" : "text-gray-500"
                    }`}
                    style={{
                      backgroundColor: field.value ? "white" : "",
                    }}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="referral">Personal Referral</SelectItem>
                  <SelectItem value="tradeshow">
                    Trade Show / Conference
                  </SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default InquiryFields;
