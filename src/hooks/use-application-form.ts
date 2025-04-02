
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { formSchema, FormValues } from "@/components/application/types";

export function useApplicationForm(defaultProgram: string = "", onSubmitSuccess?: () => void) {
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

  return {
    form,
    submittedData,
    allSubmissions,
    onSubmit,
    exportSubmissions,
    setSubmittedData,
  };
}
