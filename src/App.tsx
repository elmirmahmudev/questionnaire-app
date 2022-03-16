import React, { useState } from "react";
import { PaletteMode, ThemeProvider } from "@mui/material";
import { themeFunc } from "./theme";
import QuizPage from "./components/QuizPage/QuizPage";
import Layout from "./components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";


function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = React.useMemo(() => themeFunc(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout onModeChange={setMode} mode={mode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
