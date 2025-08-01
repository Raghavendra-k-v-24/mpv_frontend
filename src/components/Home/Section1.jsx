import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Section_1 = ({ results, setResults }) => {
  const [data, setData] = useState({ "name": "", "ssn": "", "dob": "" });
  return (
    <div className="h-max w-full flex flex-col gap-4">
      <div className="grid w-[300px] max-w-sm items-center gap-1">
        <Label htmlFor="name">Borrower Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={
            results?.borrower_information?.personal_information
              ?.borrower_name || ""
          }
          onChange={(e) =>
            setResults({
              ...results,
              borrower_information: {
                ...results.borrower_information,
                personal_information: {
                  ...results.borrower_information?.personal_information,
                  borrower_name: e.target.value,
                },
              },
            })
          }
        />
      </div>
      <div className="grid w-[300px] max-w-sm items-center gap-1">
        <Label htmlFor="ssn">Social Security Number</Label>
        <Input
          type="text"
          id="ssn"
          placeholder="SSN"
          value={
            results?.borrower_information?.personal_information
              ?.social_security_number || ""
          }
          onChange={(e) =>
            setResults({
              ...results,
              borrower_information: {
                ...results.borrower_information,
                personal_information: {
                  ...results.borrower_information?.personal_information,
                  social_security_number: e.target.value,
                },
              },
            })
          }
        />
      </div>
      <div className="grid w-[300px] max-w-sm items-center gap-1">
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          type="text"
          id="dob"
          placeholder="DOB"
          value={
            results?.borrower_information?.personal_information
              ?.date_of_birth || ""
          }
          onChange={(e) =>
            setResults({
              ...results,
              borrower_information: {
                ...results.borrower_information,
                personal_information: {
                  ...results.borrower_information?.personal_information,
                  date_of_birth: e.target.value,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default Section_1;
