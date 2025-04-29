"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "react-intersection-observer";
import * as z from "zod";
import CountryCode from "./countrycode";
import Link from "next/link";
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
import { Mail, Send, Building, AlertCircle } from "lucide-react";
import {
  IconPlugConnected,
  IconRadar,
  IconTrophy,
  IconArrowUpRight,
  IconCircuitDiode,
  IconArrowRight,
  IconBoltFilled,
} from "@tabler/icons-react";

// Form validation schema defining required fields and validation rules
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phone: z.string().min(4, { message: "Phone number is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().optional(),
  businessSegment: z.string().optional(),
  helpType: z.string().optional(),
  referralSource: z.string().optional(),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Feature card component for highlighting benefits
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
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1 + 0.3,
            duration: 0.5,
          },
        }),
      }}
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

// Required field label component with red asterisk
const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center">
    {children}
    <span className="text-red-500 ml-1">*</span>
  </span>
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Animation triggers based on scroll position
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form setup with default values and validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+1", // Default country code is "+1" for US
      phone: "",
      company: "",
      jobTitle: "",
      businessSegment: "",
      helpType: "",
      referralSource: "",
      additionalDetails: "",
    },
  });

  // Form submission handler with error handling
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
        setFormError(
          result.error || "Failed to send your message. Please try again."
        );
        console.error("Failed to send email", result);
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again later.");
      console.error("Error submitting form", error);
    }

    setIsSubmitting(false);
  };

  // Animation variants for interactive elements
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
      className="py-8 px-4 max-w-7xl mx-auto relative"
    >
      {/* Background element */}
      <div className="absolute inset-0 bg-white/30 rounded-xl -z-10 mx-4 my-4"></div>
      
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl font-bold text-center mb-8"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Consult with an expert
        </span>
      </motion.h2>

      {/* Main content grid - Features and Form */}
      <div className="grid md:grid-cols-2 gap-8 flex-col-reverse md:flex-row">
        {/* Left Column - Features and Benefits */}
        <div className="flex flex-col space-y-6 h-full justify-between order-2 md:order-1">
          {/* Introduction Section */}
          <div>
            <motion.h3
              custom={0}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="text-3xl font-bold mb-2 text-blue-900"
            >
              Ready to secure your critical infrastructure?
            </motion.h3>
          </div>

          {/* Why Choose Our Solutions */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="space-y-2 flex-grow"
          >
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <IconTrophy className="w-5 h-5 mr-2 text-blue-600" />
              Why Choose Our Solutions
            </h3>

            <div className="space-y-3 feature-card-container">
              <FeatureCard
                icon={<IconCircuitDiode className="h-6 w-6 text-blue-600" />}
                title="Hardware-Enforced Isolation"
                description="Physical, hardware-based protection that creates an air-gap equivalent — ensuring uncompromised data security without reliance on software."
                delay={0}
              />

              <FeatureCard
                icon={<IconArrowUpRight className="h-6 w-6 text-blue-600" />}
                title="Unidirectional Data Flow"
                description="Enables one-way data transmission via data diode technology, eliminating the risk of reverse-channel cyber threats."
                delay={1}
              />

              <FeatureCard
                icon={<IconPlugConnected className="h-6 w-6 text-blue-600" />}
                title="Plug & Play Deployment"
                description="Zero-configuration setup for rapid deployment — safeguard your environment immediately without impacting operations."
                delay={2}
              />

              <FeatureCard
                icon={<IconBoltFilled className="h-6 w-6 text-blue-600" />}
                title="Protocol-Agnostic Gateways"
                description="Compatible with diverse industrial protocols without the need for additional converters or third-party software."
                delay={3}
              />

              <FeatureCard
                icon={<IconRadar className="h-6 w-6 text-blue-600" />}
                title="No IP Address Exposure"
                description="Prevents any exposure of internal systems by design — Our devices operate without IP addresses, blocking unauthorized network access."
                delay={4}
              />
            </div>
          </motion.div>

          {/* Support Button */}
          <div className="flex items-center space-x-4">
            <motion.div
              custom={6}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full md:w-auto"
            >
              <Link href="/support" passHref>
                <Button
                  className="w-full md:w-auto bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white"
                  size="lg"
                >
                  Looking for Technical Support?
                </Button>
              </Link>
            </motion.div>

            <motion.div
              custom={7}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="hidden md:flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <Link href="/usecases" passHref>
                <span className="mr-1 font-medium">
                  Learn about the various usecases
                </span>
              </Link>
              <IconArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
          
          {/* Mobile-only link for use cases */}
          <motion.div
            custom={8}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="flex md:hidden items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer justify-center mt-4"
          >
            <Link href="/usecases" passHref>
              <span className="mr-1 font-medium">
                Learn about the various usecases
              </span>
            </Link>
            <IconArrowRight className="h-4 w-4" />
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 h-full order-1 md:order-2"
        >
          {isSubmitted ? (
            // Thank you message after successful submission
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
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 mt-4 font-medium px-4 text-sm"
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            // Contact form
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Error message display */}
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

                {/* Name fields with exact alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5">
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
                                placeholder="First name"
                                {...field}
                                className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="sm:col-span-7">
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
                                placeholder="Last name"
                                {...field}
                                className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm"
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
                            placeholder="username@example.com"
                            {...field}
                            className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-11 rounded-lg shadow-sm"
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

                {/* Phone fields - Country Code and Phone Number with exact alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5">
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
                                className="w-full h-11"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="sm:col-span-7">
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
                                className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Company and Job Title with exact alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5">
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
                                className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 pl-10 h-11 rounded-lg shadow-sm"
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
                  <div className="sm:col-span-7">
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
                                className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm"
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
                          <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-white text-sm">
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
                
                {/* Help Type and Referral Source in a row with exact alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5">
                    <FormField
                      control={form.control}
                      name="helpType"
                      render={({ field }) => (
                        <FormItem className="mb-0 w-full">
                          <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                            How Can We Help?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-white text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                              <SelectItem value="product-info">
                                Product Information
                              </SelectItem>
                              <SelectItem value="quote">
                                Request a Quote
                              </SelectItem>
                              <SelectItem value="demo">Request a Demo</SelectItem>
                              <SelectItem value="support">
                                Technical Support
                              </SelectItem>
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
                  <div className="sm:col-span-7">
                    <FormField
                      control={form.control}
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem className="mb-0 w-full">
                          <FormLabel className="text-blue-900 font-medium text-sm block mb-2">
                            How Did You Hear?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-blue-400 focus:ring-blue-200 h-11 rounded-lg shadow-sm bg-white text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-[180px] overflow-y-auto">
                              <SelectItem value="search">
                                Search Engine
                              </SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
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
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

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
                            className="min-h-[80px] max-h-[160px] resize-y border-gray-300 focus:border-blue-400 focus:ring-blue-200 rounded-lg shadow-sm p-3"
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

                {/* Submit button with animation */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative mt-6"
                >
                  <div className="absolute inset-0 bg-blue-600 blur-md rounded-lg opacity-20 transform translate-y-1"></div>
                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md relative rounded-lg h-12"
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