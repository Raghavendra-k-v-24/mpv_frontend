import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Form from "../../assets/1003_Form.jpg";
import BenifitInfo from "./BenifitInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Question from "./Question";
const FAQ = () => {
  return (
    <section className="h-max w-full flex px-50 xl:px-100 py-10 items-center flex-col gap-3">
      <Label className="text-2xl font-semibold text-blue-900">
        Frequently Asked Questions
      </Label>
      <div className="h-max w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          orientation="vertical"
        >
          <Question
            value={"1"}
            question={"Is my data secure?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facilis laborum tempora ea rerum, quas facere distinctioeligendi qui, possimus debitis asperiores! Provident aperiamtempora incidunt delectus hic sit unde necessitatibus? Ourflagship product combines cutting-edge technology with sleekdesign. Built with premium materials, it offers unparalleledperformance and reliability."
            }
          />
          <Question
            value={"2"}
            question={"What documents are required?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ducimus! Cum quo consequuntur error neque itaque tempore earum rem! Sit dolores nobis id illum ad ullam cum fugit reiciendis in."
            }
          />
          <Question
            value={"3"}
            question={"How long does it take?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas at provident voluptatum eius earum perspiciatis velitdolore reprehenderit corrupti hic sint error, inventore, temporaoptio nisi vero ad sit. Delectus?"
            }
          />
          <Question
            value={"4"}
            question={"What is the pricing?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas at provident voluptatum eius earum perspiciatis velitdolore reprehenderit corrupti hic sint error, inventore, temporaoptio nisi vero ad sit. Delectus?"
            }
          />
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
