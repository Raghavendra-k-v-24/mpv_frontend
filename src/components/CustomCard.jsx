import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";
import loading_gif from "../assets/loading.gif";

const CustomCard = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file) {
      toast.warning("Please select a file to upload");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { message, task_id } = response.data;
      toast.success(message);

      const interval = setInterval(async () => {
        const response = await axios.get(
          `http://localhost:5000/task/${task_id}`
        );
        const { state, result } = response.data;
        console.log(state, result);
        if (state == "SUCCESS") {
          toast.success("File processing completed.");
          clearInterval(interval);
        } else if (state == "FAILURE") {
          toast.error("Error in processing file. Try again!");
          clearInterval(interval);
        }
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };
  return (
    <Card className="w-[350px] shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <CardHeader>
          <CardTitle>Upload file</CardTitle>
          <CardDescription className="text-xs">
            Upload your filled 1003 mortgage application form{" "}
            <i>(digitally filled or handwritten).</i> <br />
            Only PDF format is accepted.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                id="form"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="text-sm text-muted-foreground">
                Don't have the form?{" "}
                <a
                  href="/1003_Application_Form.pdf"
                  download
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  Download 1003 Application Form
                </a>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            {loading ? (
              <img src={loading_gif} alt="" className="h-[50px]" />
            ) : (
              "Submit"
            )}
          </Button>
          <Button variant="outline" className="w-full">
            Help / Instructions
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CustomCard;
