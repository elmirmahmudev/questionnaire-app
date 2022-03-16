import * as React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes";

interface IResultPageProps {}

const ResultPage: React.FunctionComponent<IResultPageProps> = (props) => {
  return (
    <div>
      <p>Result</p>
      <Link to={ROUTES.HOME}>Home</Link>
    </div>
  );
};

export default ResultPage;
