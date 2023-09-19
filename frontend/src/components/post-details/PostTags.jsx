import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const PostTags = () => {
  // eslint-disable-next-line no-unused-vars
  const [chipData, setChipData] = useState([
    { key: 0, label: "Legs" },
    { key: 1, label: "Deadlift" },
  ]);

  return (
    // <Stack direction="row" spacing={1}>
    //   <Chip label="Tag 1" />
    //   <Chip label="Tag 2" />
    // </Stack>

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
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip label={data.label} />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default PostTags;
