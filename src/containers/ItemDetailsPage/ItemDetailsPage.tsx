import { Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { RouteComponentProps } from "react-router-dom";
import Form from "../../components/Form/Form";
import { MainContent } from "../../components/Layout/layoutStyled";

interface RouteParams {
  id: string;
}

interface ItemDetailsPageProps extends RouteComponentProps<RouteParams> {}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({
  match,
  history,
}) => {
  const id = match.params.id;

  return (
    <MainContent>
      <Container>
        <Typography
          variant="h4"
          component="div"
          sx={{ mt: 5, mb: 5, color: blue[900] }}
        >
          Item Details
        </Typography>
        <Form id={id} history={history} />
      </Container>
    </MainContent>
  );
};

export default ItemDetailsPage;
