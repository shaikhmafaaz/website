
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import { FormValues } from "./types";

interface SubmissionDisplayProps {
  submittedData: FormValues;
  onNewSubmission: () => void;
  exportSubmissions: () => void;
}

export function SubmissionDisplay({ 
  submittedData, 
  onNewSubmission, 
  exportSubmissions 
}: SubmissionDisplayProps) {
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
          onClick={onNewSubmission} 
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
