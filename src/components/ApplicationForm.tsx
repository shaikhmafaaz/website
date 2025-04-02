
import React from "react";
import { SubmissionDisplay } from "./application/SubmissionDisplay";
import { ApplicationFormFields } from "./application/ApplicationFormFields";
import { SubmissionStats } from "./application/SubmissionStats";
import { useApplicationForm } from "@/hooks/use-application-form";
import { ApplicationFormProps } from "./application/types";

export function ApplicationForm({ onSubmitSuccess, defaultProgram = "" }: ApplicationFormProps) {
  const { 
    form, 
    submittedData, 
    allSubmissions, 
    onSubmit, 
    exportSubmissions, 
    setSubmittedData 
  } = useApplicationForm(defaultProgram, onSubmitSuccess);

  // If form is submitted, show the submission message
  if (submittedData) {
    return (
      <SubmissionDisplay 
        submittedData={submittedData}
        onNewSubmission={() => setSubmittedData(null)}
        exportSubmissions={exportSubmissions}
      />
    );
  }

  return (
    <div>
      <SubmissionStats 
        submissionCount={allSubmissions.length} 
        exportSubmissions={exportSubmissions} 
      />
      <ApplicationFormFields 
        form={form}
        onSubmit={onSubmit}
      />
    </div>
  );
}
