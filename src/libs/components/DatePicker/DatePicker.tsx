import React, { useState } from "react";
import { DatePicker as MedusaDatePicker } from "@medusajs/ui";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  return <MedusaDatePicker />;
}
