import { Container, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import defaultConfig from "../../config";

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface RouteParams {
  id: string;
}

interface ItemDetailsPageProps extends RouteComponentProps<RouteParams> {}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ match }) => {
  const [item, setItem] = useState<Item>({
    id: 1,
    title: "Default Title",
    body: "Default Description",
    userId: 1,
  });

  const id = match.params.id;

  useEffect(() => {
    axios.get(`${defaultConfig.apiUrl}/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

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

        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-flexible"
            label="Item Title"
            name="title"
            value={item.title}
            multiline
            sx={{ mb: 5 }}
            style={{ width: "100%", maxWidth: "500px" }}
            onChange={handleChange}
          />
        </Box>
        <TextField
          id="outlined-multiline-flexible"
          label="Item Body"
          name="body"
          value={item.body}
          multiline
          style={{ width: "100%", maxWidth: "500px" }}
          onChange={handleChange}
        />
      </Container>
    </MainContent>
  );
};

export default ItemDetailsPage;
