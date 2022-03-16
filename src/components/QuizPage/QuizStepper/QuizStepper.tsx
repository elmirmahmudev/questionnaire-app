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

interface IQuizStepperProps {}

const steps = [
  {
    label: "Question 1",
    description: `For each ad campaign `,
  },
  {
    label: "Question 2",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Question 3",
    description: `Try out different ad `,
  },
];

const QuizStepper: React.FunctionComponent<IQuizStepperProps> = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        {steps[activeStep].description}
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
