"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";
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
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  Building,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
      { message: "Please enter a valid phone number" }
    ),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  businessSegment: z
    .string()
    .min(1, { message: "Please select a business segment" }),
  helpType: z.string().min(1, { message: "Please select how we can help" }),
  referralSource: z
    .string()
    .min(1, { message: "Please select how you heard about us" }),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Animation triggers based on scroll position
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [addressRef, addressInView] = useInView({
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
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    businessSegment: string;
    helpType: string;
    referralSource: string;
    additionalDetails?: string;
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="min-h-screen w-full bg-gray-50">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 py-24 px-4 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <motion.div
            className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute -top-24 -right-10 w-80 h-80 bg-blue-400 rounded-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2],
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              How can we help you?
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto font-light"
            >
              Our team is always ready to assist. To best serve you, please
              provide as much information as possible. Upon inquiry, your
              request will be directed to the appropriate market specialist for
              a quick response.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-20 px-4 max-w-7xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-white/50 rounded-xl backdrop-blur-sm -z-10 mx-4 my-4"></div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
              Information & Quote Requests
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <motion.h3
                custom={0}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="text-2xl font-bold mb-6 text-blue-900"
              >
                Ready to harden your network and enable secure data transfers?
              </motion.h3>
              <motion.p
                custom={1}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="text-gray-700 mb-8 leading-relaxed"
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
                whileHover={{ scale: 1.03 }}
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
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-700 mb-6">
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
                    className="space-y-6"
                  >
                    {formError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4 flex items-start"
                      >
                        <AlertCircle className="h-5 w-5 mr-3 mt-0.5" />
                        <span>{formError}</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus="focus"
                                variants={inputVariants}
                              >
                                <Input
                                  placeholder="first name"
                                  {...field}
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200"
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              Last Name
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus="focus"
                                variants={inputVariants}
                              >
                                <Input
                                  placeholder="last name"
                                  {...field}
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200"
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
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
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10"
                                />
                                <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus="focus"
                                variants={inputVariants}
                                className="relative"
                              >
                                <Input
                                  placeholder="+1 (123) 456-7890"
                                  {...field}
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10"
                                />
                                <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
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
                            <FormLabel className="text-blue-900 font-medium">
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
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10"
                                />
                                <Building className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
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
                                  className="border-gray-300 focus:border-blue-400 focus:ring-blue-200"
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="businessSegment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              Business Segment
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="manufacturing">
                                  Manufacturing
                                </SelectItem>
                                <SelectItem value="healthcare">
                                  Healthcare
                                </SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="technology">
                                  Technology
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="helpType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              How Can We Help You?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="product-info">
                                  Product Information
                                </SelectItem>
                                <SelectItem value="quote">
                                  Request a Quote
                                </SelectItem>
                                <SelectItem value="demo">
                                  Request a Demo
                                </SelectItem>
                                <SelectItem value="support">
                                  Technical Support
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="referralSource"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-medium">
                              How Did You Hear About Us?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="search">
                                  Search Engine
                                </SelectItem>
                                <SelectItem value="social">
                                  Social Media
                                </SelectItem>
                                <SelectItem value="referral">
                                  Personal Referral
                                </SelectItem>
                                <SelectItem value="tradeshow">
                                  Trade Show / Conference
                                </SelectItem>
                                <SelectItem value="advertisement">
                                  Advertisement
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="additionalDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900 font-medium">
                            Additional Details
                          </FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus="focus"
                              variants={inputVariants}
                            >
                              <Textarea
                                placeholder="Please provide any additional information about your requirements..."
                                className="min-h-[120px] resize-y border-gray-300 focus:border-blue-400 focus:ring-blue-200"
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="text-sm text-gray-500 mt-4 bg-gray-50 p-3 rounded-md border border-gray-100">
                      Terafence Private Limited needs the contact information
                      you provide to send you updates about our products and
                      services. You may unsubscribe at any time from these
                      communications via our Privacy Policy.
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-blue-600 blur-md rounded-lg opacity-20 transform translate-y-1"></div>
                      <Button
                        type="submit"
                        className="w-full py-6 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white shadow-md relative"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
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

        {/* Address & Map Section */}
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
                      TX 75234                    </p>
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
      </main>
      <Footer />
    </div>
  );
}