import { RouteComponentProps } from "react-router-dom";

const ItemDetailsPage: React.FC<RouteComponentProps> = ({
  history,
  location,
}) => {
  console.log("are we here");
  return (
    <>
      <p>ItemDetailsPage</p>
    </>
  );
};

export default ItemDetailsPage;
