import { Container, IconButton, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import defaultConfig from "../../config";
import links from "../../helpers/links";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export interface Item {
  title: string;
  body: string;
}

const CreatePage: React.FC<RouteComponentProps> = ({ history }) => {
  const [item, setItem] = useState<Item>({
    title: "Default Title",
    body: "Default Description",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const createItem = () => {
    setIsLoading(true);

    axios
      .post(`${defaultConfig.apiUrl}`, item)
      .then((response) => {
        history.push(links.home.pattern);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
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
              Create Item
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
                    Create Item
                  </Typography>

                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, color: blue[600] }}
                    onClick={createItem}
                  >
                    <AddCircleOutlineIcon />
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

export default CreatePage;
