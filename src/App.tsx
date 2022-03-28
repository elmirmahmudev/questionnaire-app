import React, { createContext, useState } from "react";
import { PaletteMode, ThemeProvider } from "@mui/material";
import { themeFunc } from "./theme";
import QuizPage from "./components/QuizPage/QuizPage";
import Layout from "./components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ResultPage from "./components/ResultPage/ResultPage";
import ROUTES from "./components/routes";

interface IQuizContext {
  name: string;
  userAnswers: { id: number; answers: string[] }[];
}

export const QuizContext = createContext<{
  quiz: IQuizContext;
  setQuiz: (quiz: IQuizContext) => void;
}>({
  quiz: {
    name: "",
    userAnswers: [],
  },
  setQuiz: (quiz: IQuizContext) => void quiz,
});

export const defaultQuizContextData = {
  name: "",
  userAnswers: [
    { id: 1, answers: [] },
    { id: 2, answers: [] },
    { id: 3, answers: [] },
  ],
};

function App() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const mode = localStorage.getItem("paletteMode") as PaletteMode;
    return mode || "light";
  });
  const [quiz, setQuiz] = useState<IQuizContext>(defaultQuizContextData);

  const theme = React.useMemo(() => themeFunc(mode), [mode]);

  const handleModeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("paletteMode", newMode);
    setMode(newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizContext.Provider value={{ quiz, setQuiz }}>
        <Layout onModeChange={handleModeChange} mode={mode}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.QUIZ} element={<QuizPage />} />
            <Route path={ROUTES.RESULTS} element={<ResultPage />} />
          </Routes>
        </Layout>
      </QuizContext.Provider>
    </ThemeProvider>
  );
}

export default App;
