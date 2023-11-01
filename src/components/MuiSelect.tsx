import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChangeMulti = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Box width={250}>
          <TextField
            label="select country"
            select
            value={country}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="VI">Viet Nam</MenuItem>
            <MenuItem value="LA">Laos</MenuItem>
            <MenuItem value="CU">Cuba</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Stack spacing={2} direction="row">
        <Box width={250}>
          <TextField
            label="select country"
            select
            value={countries}
            onChange={handleChangeMulti}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            size="small"
            color="secondary"
            helperText="Select a country"
            error={countries.length === 0}
          >
            <MenuItem value="EN">England</MenuItem>
            <MenuItem value="FR">France</MenuItem>
            <MenuItem value="GE">Germany</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MuiSelect;
