import { useState } from "react";
import { Dayjs } from "dayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Box } from "@mui/material";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  console.log("value", value);
  return (
    <Box width="500px">
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  );
};
