import * as z from "zod";

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;

// Default form values
export const defaultFormValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",  
  phone: "",
  company: "",
  jobTitle: "",
  businessSegment: "",
  helpType: "",
  referralSource: "",
  additionalDetails: "",
};