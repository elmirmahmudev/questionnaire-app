import * as React from 'react';
import QuizStepper from './QuizStepper/QuizStepper';

interface IQuizPageProps {
}

const QuizPage: React.FunctionComponent<IQuizPageProps> = (props) => {
  return (<QuizStepper />);
};

export default QuizPage;
