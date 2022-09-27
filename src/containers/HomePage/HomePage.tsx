import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import ListItem from "../../components/ListItem/ListItem";
import defaultConfig from "../../config";
import links from "../../helpers/links";

const StyledLink = styled(Link)`
  transition: all 500ms ease;
  color: #fff;

  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
`;

export interface Item {
  id: number;
  title: string;
  body: string;
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

  return (
    <MainContent>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <StyledLink to={links.create.url}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </StyledLink>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Create Item
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ mt: 5, mb: 5, color: blue[900] }}
          >
            All Items
          </Typography>
          <Box>
            {data &&
              data.map((item: Item) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  body={item.body}
                />
              ))}
          </Box>
        </Box>
      </Container>
    </MainContent>
  );
};

export default HomePage;
