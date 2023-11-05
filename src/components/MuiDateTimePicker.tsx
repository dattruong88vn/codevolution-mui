import { useState } from "react";
import { Dayjs } from "dayjs";

import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(null);

  console.log(selectedDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Controlled picker"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />
      <DateTimePicker
        label="Controlled picker"
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};
