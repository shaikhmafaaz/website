
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface SubmissionStatsProps {
  submissionCount: number;
  exportSubmissions: () => void;
}

export function SubmissionStats({ submissionCount, exportSubmissions }: SubmissionStatsProps) {
  if (submissionCount === 0) return null;
  
  return (
    <div className="mb-6 flex justify-between items-center">
      <p className="text-sm text-gray-500">
        {submissionCount} application{submissionCount > 1 ? 's' : ''} saved locally
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
  );
}
