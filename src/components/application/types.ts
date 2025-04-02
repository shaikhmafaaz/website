
import { z } from "zod";

// Define the form schema
export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export interface ApplicationFormProps {
  onSubmitSuccess?: () => void;
  defaultProgram?: string;
}
