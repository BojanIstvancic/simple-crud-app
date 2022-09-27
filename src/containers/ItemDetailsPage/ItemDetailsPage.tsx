import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import defaultConfig from "../../config";
import links from "../../helpers/links";

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

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({
  match,
  history,
}) => {
  const [item, setItem] = useState<Item>({
    id: 1,
    title: "Default Title",
    body: "Default Description",
    userId: 1,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const id = match.params.id;

  useEffect(() => {
    axios
      .get(`${defaultConfig.apiUrl}/${id}`)
      .then((res) => {
        setItem(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const deleteItem = () => {
    axios
      .delete(`${defaultConfig.apiUrl}/${item.id}`)
      .then(() => {
        history.push(links.home.pattern);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateItem = () => {
    axios
      .put(`${defaultConfig.apiUrl}/${item.id}`, item)
      .then(() => {
        history.push(links.home.pattern);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainContent>
      <Container>
        {isLoading && (
          <Box sx={{ width: "100%", mt: 10 }}>
            <LinearProgress />
          </Box>
        )}
        {!isLoading && (
          <>
            <Typography
              variant="h4"
              component="div"
              sx={{ mt: 5, mb: 5, color: blue[900] }}
            >
              Item Details
            </Typography>
            <Box>
              <Box>
                <Box sx={{ mb: 5 }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Item Title"
                    name="title"
                    value={item.title}
                    multiline
                    style={{ width: "100%", maxWidth: "500px" }}
                    onChange={handleChange}
                  />
                </Box>
                <Box sx={{ mb: 5 }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Item Body"
                    name="body"
                    value={item.body}
                    multiline
                    style={{ width: "100%", maxWidth: "500px" }}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography variant="body1" component={"span"} sx={{ mr: 3 }}>
                    Delete Item
                  </Typography>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, color: red[300] }}
                    onClick={deleteItem}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="body1" component={"span"} sx={{ mr: 3 }}>
                    Update Item
                  </Typography>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ color: blue[600] }}
                    onClick={updateItem}
                  >
                    <UpdateIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </MainContent>
  );
};

export default ItemDetailsPage;
