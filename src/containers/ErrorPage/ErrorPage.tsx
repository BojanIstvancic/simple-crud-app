import { Link, RouteComponentProps } from "react-router-dom";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import links from "../../helpers/links";
import Button from "@mui/material/Button";

const ErrorPage: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" sx={{ mt: 15, mb: 5 }}>
          This Page Doesn't exist. Go back to Home Page.
        </Typography>
        <Link to={links.home.url} style={{ textDecoration: "none" }}>
          <Button variant="contained">Homepage</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default ErrorPage;
