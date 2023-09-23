import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const PostTags = ({ tags }) => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {tags.map((data) => {
          return (
            <ListItem key={tags.length}>
              <Chip label={data} size="small" />
            </ListItem>
          );
        })}
      </Paper>
    </>
  );
};

export default PostTags;
