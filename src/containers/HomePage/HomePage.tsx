import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import ListItem from "../../components/ListItem/ListItem";
import defaultConfig from "../../config";

export interface Item {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const HomePage: React.FC<RouteComponentProps> = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(defaultConfig.apiUrl);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data, "data");

  return (
    <MainContent>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Create Item
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Box>
          <Typography variant="h4" component="div" sx={{ mt: 5, mb: 5 }}>
            All Items
          </Typography>
          <Box>
            {data &&
              data.map((item: Item) => (
                <ListItem key={item.id} title={item.title} body={item.body} />
              ))}
          </Box>
        </Box>
      </Container>
    </MainContent>
  );
};

export default HomePage;
