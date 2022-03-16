import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(ROUTES.QUIZ);
  };
  return (
    <Box padding="1.25rem">
      <Typography component="h1" variant="h5">
        Get Started
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          placeholder="Full name"
          name="full-name"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
