import { RouteComponentProps } from "react-router-dom";

const ErrorPage: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <p>
        Cannot find this page. Maybe a refresh can help or the page has been
        moved.
      </p>
    </>
  );
};

export default ErrorPage;
