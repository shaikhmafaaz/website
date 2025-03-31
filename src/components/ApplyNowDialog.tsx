
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ApplicationForm } from "./ApplicationForm";

interface ApplyNowDialogProps {
  programName?: string;
}

export function ApplyNowDialog({ programName }: ApplyNowDialogProps) {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#800000] hover:bg-[#5a0000] text-white">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Application Form</DialogTitle>
          <DialogDescription>
            {programName 
              ? `Complete this form to apply for the ${programName} program.`
              : "Complete this form to apply to AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERECE."}
          </DialogDescription>
        </DialogHeader>
        <ApplicationForm 
          onSubmitSuccess={() => setOpen(false)} 
          defaultProgram={programName}
        />
      </DialogContent>
    </Dialog>
  );
}
