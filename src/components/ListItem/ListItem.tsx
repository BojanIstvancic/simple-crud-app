import { Box, Typography } from "@mui/material";

export interface ListItem {
  title: string;
  body: string;
}

const ListItem: React.FC<ListItem> = ({ title, body }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </Box>
  );
};

export default ListItem;
