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
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { MainContent } from "../../components/layout/layoutStyled";
import ListItem from "../../components/ListItem/ListItem";
import defaultConfig from "../../config";
import links from "../../helpers/links";

const StyledLink = styled(Link)`
  color: #fff;
`;

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const HomePage: React.FC<RouteComponentProps> = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(defaultConfig.apiUrl)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);

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
        {isLoading && (
          <Box sx={{ width: "100%", mt: 10 }}>
            <LinearProgress />
          </Box>
        )}
        {!isLoading && (
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
        )}
      </Container>
    </MainContent>
  );
};

export default HomePage;
