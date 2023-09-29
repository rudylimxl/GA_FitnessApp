import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  //state that stores the notifications of unread comments
  const [unreadComments, setUnreadComments] = useState(null);
  //state that stores the count of the unread comments
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userdetail");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //navigates to the post and sets the comment to be read
  const readComment = async (postId, commentId) => {
    //Set the comment to be read by the user
    await axios.put(
      `https://strongerfitnessapp.onrender.com/posts/${postId}?id=${commentId}`
    );

    //Navigate to the post page
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(
          `https://strongerfitnessapp.onrender.com/posts/unread?userId=${userId}`
        );

        setUnreadComments(response.data);
        setCount(
          response.data.reduce(
            (accumulator, current) => accumulator + current.comments.length,
            0
          )
        );
      } catch (error) {
        alert("Unable to get notifications");
      }
    };

    getNotifications();
  }, []);

  return (
    <div>
      <IconButton
        onClick={count ? handleOpen : null}
        anchorEl={anchorEl}
        color="primary"
      >
        <Badge badgeContent={count} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {unreadComments !== null
          ? unreadComments.map((post) =>
              post.comments.map((comment) => (
                <MenuItem
                  onClick={() => readComment(post._id, comment._id)}
                  key={comment._id}
                >
                  Someone comment on your post: &nbsp;{" "}
                  <em>{`'${post.title}'`}</em>
                  &nbsp; at &nbsp;
                  {comment.date}
                </MenuItem>
              ))
            )
          : null}
      </Menu>
    </div>
  );
};

export default Notifications;
