import { Box, styled, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

import links from "../../helpers/links";

const StyledLink = styled(Link)`
  text-decoration: none;

  transition: all 500ms ease;

  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
`;

export interface ListItemProps {
  id: number;
  title: string;
  body: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, title, body }) => {
  return (
    <StyledLink to={links.itemDetails(id).url}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ color: blue[600] }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: grey[800] }}>
          {body}
        </Typography>
      </Box>
    </StyledLink>
  );
};

export default ListItem;
