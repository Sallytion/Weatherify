import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger
        className="w-[180px]"
        style={{ backgroundColor: "black", color: "white", border: '0px' }}
      >
        <SelectValue
          placeholder="Select a unit"
          style={{ backgroundColor: "black", color: "white", border: '0px' }}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup style={{ backgroundColor: "black", color: "white", border: '0px' }}>
          <SelectLabel>Select tempreature </SelectLabel>
          <SelectItem value="celcius">°C - Celcius</SelectItem>
          <SelectItem value="farhenheit">°F - Farhenheit</SelectItem>
          <SelectItem value="kelvin">K - kelvin</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}