import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import { questionsData } from "../../../questionsData";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { QuizContext } from "../../../App";

interface IQuizStepperProps {}

const steps = [
  {
    label: "Question 1",
  },
  {
    label: "Question 2",
  },
  {
    label: "Question 3",
  },
];

const QuizStepper: React.FunctionComponent<IQuizStepperProps> = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { quiz, setQuiz } = React.useContext(QuizContext);
  const navigate = useNavigate();
  const maxSteps = steps.length;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    if (window.confirm("Are you sure?")) {
      navigate(ROUTES.RESULTS);
    }
  };
  const isSingleAnswer = questionsData[activeStep].answers.length === 1;

  const currentUserAnswer = () =>
    quiz.userAnswers.find((obj) => obj.id === questionsData[activeStep].id);

  const toggleArrayItem = (arr: string[], value: string) => {
    if (!arr.includes(value)) {
      arr.push(value);
    } else {
      arr.splice(arr.indexOf(value), 1);
    }
    return arr;
  };

  const handleOptionChange = (id: number, value: string) => {
    setQuiz({
      ...quiz,
      userAnswers: quiz.userAnswers.map((answerObj) => {
        return answerObj.id === id
          ? {
              id,
              answers: isSingleAnswer
                ? [value]
                : toggleArrayItem([...answerObj.answers], value),
            }
          : answerObj;
      }),
    });
  };

  return (
    <Box sx={{ maxWidth: theme.breakpoints.values.md, flex: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, width: "100%", p: 2 }}>
        <Typography variant="h5">
          {questionsData[activeStep].question}
        </Typography>
        {isSingleAnswer ? (
          <RadioGroup
            sx={{ width: "fit-content" }}
            aria-label="quiz-options"
            name="radio-buttons-group"
            value={currentUserAnswer()?.answers[0] ?? ""}
            onChange={(e) => {
              handleOptionChange(questionsData[activeStep].id, e.target.value);
            }}
          >
            {questionsData[activeStep].options.map((option) => (
              <FormControlLabel
                key={option}
                value={option ?? ""}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        ) : (
          <FormGroup
          sx={{ width: "fit-content" }}
          >
            {questionsData[activeStep].options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    onChange={(e) => {
                      handleOptionChange(
                        questionsData[activeStep].id,
                        e.target.value
                      );
                    }}
                    checked={currentUserAnswer()?.answers.includes(option)}
                    value={option ?? ""}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        )}
      </Box>
      <MobileStepper
        sx={{ userSelect: "none" }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <Button
            size="small"
            variant="contained"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
        nextButton={
          activeStep < maxSteps - 1 ? (
            <Button size="small" variant="contained" onClick={handleNext}>
              Next
              <KeyboardArrowRight />
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={handleFinish}
            >
              Finish Quiz
              <KeyboardArrowRight />
            </Button>
          )
        }
      />
    </Box>
  );
};

export default QuizStepper;
