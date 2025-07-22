import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FileUpload = () => {
  return (
    <div className="h-max w-full flex flex-col items-center gap-3">
      <Label>
        Have a pre-filled 1003 Mortgage form ready? Upload it below.
      </Label>
      <div className="h-max w-max flex gap-2">
        <Input
          id="form"
          type="file"
          accept=".pdf"
          // onChange={handleFileChange}
          className="w-max"
        />
        <Button type="submit" className="w-max">
          Upload
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
