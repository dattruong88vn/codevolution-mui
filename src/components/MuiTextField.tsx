import { Stack, TextField, InputAdornment } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={value ? "" : "Required"}
        />
        <TextField
          label="Form Input"
          helperText="Help user understand this field"
        />
        <TextField label="Password" type="password" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="disabled" disabled />
        <TextField label="read-only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <VisibilityOffIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <VisibilityIcon onClick={() => setShowPassword(true)} />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
