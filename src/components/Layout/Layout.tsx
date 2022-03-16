import {
  Box,
  FormControlLabel,
  PaletteMode,
  Switch,
  Typography,
} from "@mui/material";
import * as React from "react";

interface ILayoutProps {
  mode: PaletteMode;
  onModeChange: (mode: PaletteMode) => void;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  mode,
  onModeChange,
  children,
}) => {
  const handleChange = () => onModeChange(mode === "dark" ? "light" : "dark");

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: "15px",
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">Quiz for you</Typography>
        <FormControlLabel
          value={mode}
          control={
            <Switch
              color="secondary"
              value={mode === "dark"}
              onChange={handleChange}
            />
          }
          label={mode.toUpperCase()}
          labelPlacement="start"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
