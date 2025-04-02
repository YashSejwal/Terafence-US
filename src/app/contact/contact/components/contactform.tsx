"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "react-intersection-observer";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Send,
  Building,
  AlertCircle,
} from "lucide-react";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phone: z.string().min(4, { message: "Phone number is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  businessSegment: z.string().min(1, { message: "Please select a business segment" }),
  helpType: z.string().min(1, { message: "Please select how we can help" }),
  referralSource: z.string().min(1, { message: "Please select how you heard about us" }),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Animation triggers based on scroll position
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+1",
      phone: "",
      company: "",
      jobTitle: "",
      businessSegment: "",
      helpType: "",
      referralSource: "",
      additionalDetails: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormError(null);
    
    // Format the phone number to include country code
    const formattedData = {
      ...data,
      phone: `${data.countryCode} ${data.phone}`,
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        form.reset(); // Clear the form after successful submission
      } else {
        setFormError(result.error || "Failed to send your message. Please try again.");
        console.error("Failed to send email", result);
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again later.");
      console.error("Error submitting form", error);
    }
    
    setIsSubmitting(false);
  };

  const inputVariants = {
    focus: { scale: 1.01, transition: { type: "spring", stiffness: 300 } },
  };

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
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-16 px-4 max-w-7xl mx-auto relative"
    >
      <div className="absolute inset-0 bg-white/50 rounded-xl backdrop-blur-sm -z-10 mx-4 my-4"></div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl font-bold text-center mb-10"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Information & Quote Requests
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <motion.h3
            custom={0}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-2xl font-bold mb-4 text-blue-900"
          >
            Ready to harden your network and enable secure data transfers?
          </motion.h3>
          <motion.p
            custom={1}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-gray-700 mb-6 leading-relaxed"
          >
            Each customer has unique projects, operational needs, and goals.
            Our tech team is here to guide you toward the best solutions. To
            ensure you receive the most accurate details, we ask you to
            complete the form below so we can provide an appropriate
            response as quickly as possible.
          </motion.p>
          <motion.div
            custom={2}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 blur-md rounded-lg opacity-20"></div>
            <Button
              className="w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white relative"
              size="lg"
            >
              Looking for Technical Support?
            </Button>
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-100"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-700 mb-5">
                Your inquiry has been submitted successfully. Our team will
                get back to you shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {formError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md mb-3 flex items-start"
                  >
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
                    <span className="text-sm">{formError}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus="focus"
                            variants={inputVariants}
                          >
                            <Input
                              placeholder="First name"
                              {...field}
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus="focus"
                            variants={inputVariants}
                          >
                            <Input
                              placeholder="Last name"
                              {...field}
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-medium text-sm">
                        Email
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus="focus"
                          variants={inputVariants}
                          className="relative"
                        >
                          <Input
                            type="email"
                            placeholder="username@example.com"
                            {...field}
                            className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-10 rounded-lg shadow-sm"
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

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="md:col-span-1">
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          Country Code
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus="focus"
                            variants={inputVariants}
                          >
                            <Input
                              placeholder="+1"
                              {...field}
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="md:col-span-3">
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus="focus"
                            variants={inputVariants}
                          >
                            <Input
                              placeholder="(123) 456-7890"
                              {...field}
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          Company Name
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
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-10 rounded-lg shadow-sm"
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
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-medium text-sm">
                          Job Title
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus="focus"
                            variants={inputVariants}
                          >
                            <Input
                              placeholder="IT Manager"
                              {...field}
                              className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Three select fields in one row with controlled widths */}
                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="businessSegment"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-blue-900 font-medium text-sm truncate">
                          Business Segment
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm bg-white text-sm whitespace-nowrap">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="helpType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-blue-900 font-medium text-sm truncate">
                          How Can We Help?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm bg-white text-sm whitespace-nowrap">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                            <SelectItem value="product-info">Product Information</SelectItem>
                            <SelectItem value="quote">Request a Quote</SelectItem>
                            <SelectItem value="demo">Request a Demo</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-blue-900 font-medium text-sm truncate">
                          How Did You Hear?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-10 rounded-lg shadow-sm bg-white text-sm whitespace-nowrap">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Personal Referral</SelectItem>
                            <SelectItem value="tradeshow">Trade Show / Conference</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="additionalDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-medium text-sm">
                        Additional Details
                      </FormLabel>
                      <FormControl>
                        <motion.div
                          whileFocus="focus"
                          variants={inputVariants}
                        >
                          <Textarea
                            placeholder="Please provide any additional information about your requirements..."
                            className="min-h-[100px] max-h-[180px] resize-y border-gray-300 focus:border-blue-400 focus:ring-blue-200 rounded-lg shadow-sm p-3"
                            {...field}
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <div className="text-xs text-gray-600 mt-4 bg-gray-50 p-3 rounded-md border border-gray-100 shadow-inner">
                  <p className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full text-blue-600 mr-2 mt-0.5 flex-shrink-0">
                      <AlertCircle className="h-3 w-3" />
                    </span>
                    Terafence US needs the contact information
                    you provide to send you updates about our products and
                    services. You may unsubscribe at any time from these
                    communications.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative mt-5"
                >
                  <div className="absolute inset-0 bg-blue-600 blur-md rounded-lg opacity-20 transform translate-y-1"></div>
                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md relative rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>Submit</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}