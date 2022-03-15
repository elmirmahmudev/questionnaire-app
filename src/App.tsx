import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import QuizPage from "./components/QuizPage/QuizPage";
import Layout from "./components/Layout/Layout";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <QuizPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
