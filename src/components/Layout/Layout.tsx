import {
  Box,
  FormControlLabel,
  PaletteMode,
  Switch,
  Typography,
} from "@mui/material";
import * as React from "react";
import { QuizContext } from "../../App";

interface ILayoutProps {
  mode: PaletteMode;
  onModeChange: () => void;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  mode,
  onModeChange,
  children,
}) => {
  const { quiz } = React.useContext(QuizContext);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Quiz {quiz.name && `for you "${quiz.name}"`}</Typography>
        <FormControlLabel
          value={mode}
          control={
            <Switch
              color="secondary"
              checked={mode === "dark"}
              onChange={onModeChange}
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
