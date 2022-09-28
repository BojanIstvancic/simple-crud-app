import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainContent } from "../../components/layout/layoutStyled";
import defaultConfig from "../../config";
import links from "../../helpers/links";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { History } from "history";

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface FormProps {
  history: History;
  id?: string | null;
}

const Form: React.FC<FormProps> = ({ history, id = null }) => {
  const [item, setItem] = useState<Item>({
    id: 1,
    title: "Add title here",
    body: "Add description here",
    userId: 1,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`${defaultConfig.apiUrl}/${id}`)
        .then((res) => {
          setItem(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setIsLoading(false);
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const createItem = () => {
    setIsLoading(true);

    axios
      .post(`${defaultConfig.apiUrl}`, { title: item.title, body: item.body })
      .then((response) => {
        console.log(response, "create");
        history.push(links.home.url);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
  };

  const deleteItem = () => {
    setIsLoading(true);

    axios
      .delete(`${defaultConfig.apiUrl}/${item.id}`)
      .then((response) => {
        console.log(response, "delete");
        history.push(links.home.url);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
  };

  const updateItem = () => {
    setIsLoading(true);

    axios
      .put(`${defaultConfig.apiUrl}/${item.id}`, item)
      .then((response) => {
        console.log(response, "update");
        history.push(links.home.url);
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
            <Box>
              <Box>
                <Box sx={{ mb: 5 }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
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
                    label="Description"
                    name="body"
                    value={item.body}
                    multiline
                    style={{ width: "100%", maxWidth: "500px" }}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box>
                {id ? (
                  <>
                    <Box>
                      <Typography
                        variant="body1"
                        component={"span"}
                        sx={{ mr: 3 }}
                      >
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
                      <Typography
                        variant="body1"
                        component={"span"}
                        sx={{ mr: 3 }}
                      >
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
                  </>
                ) : (
                  <Box>
                    <Typography
                      variant="body1"
                      component={"span"}
                      sx={{ mr: 3 }}
                    >
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
                )}
              </Box>
            </Box>
          </>
        )}
      </Container>
    </MainContent>
  );
};

export default Form;
