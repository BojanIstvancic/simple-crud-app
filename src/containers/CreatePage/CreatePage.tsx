import { Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import Form from "../../components/form/Form";

const CreatePage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <MainContent>
      <Container>
        <Typography
          variant="h4"
          component="div"
          sx={{ mt: 5, mb: 5, color: blue[900] }}
        >
          Create Item
        </Typography>
        <Form history={history} />
      </Container>
    </MainContent>
  );
};

export default CreatePage;
