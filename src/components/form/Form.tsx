import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { IconButton, Modal, TextField, Typography } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import defaultConfig from "../../config";
import links from "../../helpers/links";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { History } from "history";

export interface ModalDataProps {
  text: string;
  displayModal: boolean;
}
export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface FormProps {
  history: History;
  id?: string | null;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  bgcolor: "#fff",
  border: `2px solid ${blue[600]}`,
  color: `${blue[600]}`,
  boxShadow: 24,
  p: 4,
};

const Form: React.FC<FormProps> = ({ history, id = null }) => {
  const [item, setItem] = useState<Item>({
    id: 1,
    title: "Add title here",
    body: "Add description here",
    userId: 1,
  });

  const [modalData, setModalData] = useState<ModalDataProps>({
    text: "Modal Text",
    displayModal: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`${defaultConfig.apiUrl}/${id}`)
        .then((response) => {
          setItem(response.data);
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
        console.log(response, "create"); //data

        setModalData({
          text: "You have successfully created an item. You will be redirected on homepage.",
          displayModal: true,
        });

        setTimeout(() => history.push(links.home.url), 5000);
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
        setModalData({
          text: "You have successfully deleted the item. You will be redirected on homepage.",
          displayModal: true,
        });
        console.log(response, "update"); // data

        setTimeout(() => history.push(links.home.url), 5000);
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
        setModalData({
          text: "You have successfully updated the item.",
          displayModal: true,
        });
        console.log(response, "update"); // data
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ width: "100%", mt: 10 }}>
          <LinearProgress />
        </Box>
      )}
      {!isLoading && (
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
                error={item.title === ""}
                helperText={
                  item.title === ""
                    ? "This field is required"
                    : "Please enter a title"
                }
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
                error={item.body === ""}
                helperText={
                  item.body === ""
                    ? "This field is required"
                    : "Please enter a description"
                }
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Box>
            {id ? (
              <>
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
                    disabled={item.title === "" || item.body === ""}
                  >
                    <UpdateIcon />
                  </IconButton>
                </Box>
              </>
            ) : (
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
                  disabled={item.title === "" || item.body === ""}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      )}

      <Modal
        open={modalData.displayModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => setModalData({ ...modalData, displayModal: false })}
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalData.text}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Form;
