import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Question = ({ value, question, answer }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-xl font-regular text-blue-950 hover:underline-offset-5 ">
        {question}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <p className="text-justify text-md text-blue-950">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Question;
