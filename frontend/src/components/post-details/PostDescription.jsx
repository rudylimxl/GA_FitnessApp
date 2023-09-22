import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
const PostDescription = ({ description }) => {
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Box
        component="div"
        sx={{
          whiteSpace: "normal",
          my: 2,
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {description}
      </Box>
    </div>
  );
};

export default PostDescription;
