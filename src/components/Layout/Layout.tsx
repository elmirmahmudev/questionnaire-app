import { Box, Typography } from "@mui/material";
import * as React from "react";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: '0.625rem',
        }}
      >
        <Typography variant="h5">Quiz for you</Typography>
      </Box>
      <Box sx={{
          display: 'flex',
          justifyContent: 'center'
      }}>{children}</Box>
    </Box>
  );
};

export default Layout;
