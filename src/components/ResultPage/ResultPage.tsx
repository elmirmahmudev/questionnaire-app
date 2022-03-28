import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { defaultQuizContextData, QuizContext } from "../../App";
import { questionsData } from "../../questionsData";
import ROUTES from "../routes";

interface IResultPageProps {}

const containsAll = (arr1: string[], arr2: string[]) => {
  return arr1.length === arr2.length
    ? arr2.every((arr2Item) => arr1.includes(arr2Item))
    : false;
};

const ResultPage: React.FunctionComponent<IResultPageProps> = (props) => {
  const navigate = useNavigate();
  const { quiz, setQuiz } = React.useContext(QuizContext);

  const redirectHome = () => {
    setQuiz(defaultQuizContextData);
    navigate(ROUTES.HOME);
  };
  const calcResult = () => {
    let correctAnswers = 0;
    quiz.userAnswers.map((obj) => {
      const userAnswers = obj.answers;
      const question = questionsData.find((question) => question.id === obj.id);
      if (containsAll(userAnswers, question?.answers || [])) {
        correctAnswers += 1;
      }
      return obj;
    });
    return correctAnswers;
  };
  return (
    <div>
      <Typography variant="h6">Results</Typography>
      <Box sx={{ margin: "15px 0" }}>
        {calcResult()} is correct out of 3 questions
      </Box>
      <Button color="primary" onClick={redirectHome}>
        Return home
      </Button>
    </div>
  );
};

export default ResultPage;
