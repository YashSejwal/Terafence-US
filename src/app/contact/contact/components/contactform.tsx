"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "react-intersection-observer";
import { Form } from "@/components/ui/form";

// Import form schema and utilities
import { formSchema, defaultFormValues, FormValues } from "./utils/form-schema";

// Import modular components
import FeaturesSection from "./features/FeaturesSection";
import FormSuccess from "./form/FormSuccess";
import ErrorDisplay from "./form/ErrorDisplay";
import PersonalInfoFields from "./form/PersonalInfoFields";
import CompanyFields from "./form/CompanyFields";
import InquiryFields from "./form/InquiryFields";
import DetailField from "./form/DetailField";
import SubmitButton from "./form/SubmitButton";

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
    defaultValues: defaultFormValues,
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
        <FeaturesSection formInView={formInView} />

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 h-full order-1 md:order-2"
        >
          {isSubmitted ? (
            // Thank you message after successful submission
            <FormSuccess onReset={() => setIsSubmitted(false)} />
          ) : (
            // Contact form
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Error message display */}
                <ErrorDisplay error={formError} />

                {/* Form fields in modular components */}
                <PersonalInfoFields form={form} />
                <CompanyFields form={form} />
                <InquiryFields form={form} />
                <DetailField form={form} />
                
                {/* Submit button */}
                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}