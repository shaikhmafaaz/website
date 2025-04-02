
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";

// Define the form schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ApplicationFormProps {
  onSubmitSuccess?: () => void;
  defaultProgram?: string;
}

export function ApplicationForm({ onSubmitSuccess, defaultProgram = "" }: ApplicationFormProps) {
  const { toast } = useToast();
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [allSubmissions, setAllSubmissions] = useState<FormValues[]>([]);
  
  // Load existing submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('applicationSubmissions');
    if (savedSubmissions) {
      try {
        setAllSubmissions(JSON.parse(savedSubmissions));
      } catch (e) {
        console.error('Error parsing saved submissions:', e);
      }
    }
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: defaultProgram,
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Add timestamp to submission
    const submissionWithTimestamp = {
      ...data,
      submittedAt: new Date().toISOString(),
    };
    
    // Store in localStorage
    const updatedSubmissions = [...allSubmissions, submissionWithTimestamp];
    localStorage.setItem('applicationSubmissions', JSON.stringify(updatedSubmissions));
    setAllSubmissions(updatedSubmissions);
    
    // Set the submitted data to display on screen
    setSubmittedData(data);
    
    // Log to console as well
    console.log("Application form submitted:", data);
    console.log("All submissions stored in localStorage:", updatedSubmissions);
    
    // Show success message
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We will contact you soon. Your data has been saved locally.",
    });
    
    // Reset form
    form.reset();
    
    // Call success callback
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  }

  // Export submissions as JSON file
  const exportSubmissions = () => {
    if (allSubmissions.length === 0) {
      toast({
        title: "No submissions",
        description: "There are no submissions to export.",
        variant: "destructive",
      });
      return;
    }
    
    const dataStr = JSON.stringify(allSubmissions, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = `application-submissions-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Export successful",
      description: `${allSubmissions.length} submissions exported as ${exportFileDefaultName}`,
    });
  };

  // If form is submitted, show the submission message
  if (submittedData) {
    return (
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="h-6 w-6" />
          <h3 className="text-lg font-medium">Application Received</h3>
        </div>
        <p className="text-gray-500">We've received the following application details:</p>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 gap-2">
            <p className="text-gray-500 font-medium">Name:</p>
            <p className="col-span-2">{submittedData.firstName} {submittedData.lastName}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <p className="text-gray-500 font-medium">Email:</p>
            <p className="col-span-2">{submittedData.email}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <p className="text-gray-500 font-medium">Phone:</p>
            <p className="col-span-2">{submittedData.phone}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <p className="text-gray-500 font-medium">Program:</p>
            <p className="col-span-2">{submittedData.program}</p>
          </div>
          {submittedData.message && (
            <div className="grid grid-cols-3 gap-2">
              <p className="text-gray-500 font-medium">Message:</p>
              <p className="col-span-2">{submittedData.message}</p>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Your application has been saved locally in this browser.
        </p>
        <div className="flex gap-4">
          <Button 
            onClick={() => setSubmittedData(null)} 
            className="mt-4"
            variant="outline"
          >
            Submit another application
          </Button>
          <Button 
            onClick={exportSubmissions}
            className="mt-4"
            variant="secondary"
          >
            <Download className="mr-2 h-4 w-4" />
            Export All Submissions
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div>
      {allSubmissions.length > 0 && (
        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {allSubmissions.length} application{allSubmissions.length > 1 ? 's' : ''} saved locally
          </p>
          <Button 
            onClick={exportSubmissions}
            variant="outline"
            size="sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Submissions
          </Button>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program of Interest</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Computer Science" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the program or course you're interested in applying to
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your academic background and why you're interested in this program"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-accent hover:bg-blue-accent/80">
            Submit Application
          </Button>
        </form>
      </Form>
    </div>
  );
}
