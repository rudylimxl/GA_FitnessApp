import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  //   const [unreadComments, setUnreadComments] = useState();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifications = [
    {
      id: 0,
      label: "First notification",
    },
    {
      id: 1,
      label: "Second notification",
    },
  ];

  return (
    <div>
      <IconButton
        onClick={notifications.length ? handleOpen : null}
        anchorEl={anchorEl}
      >
        <Badge badgeContent={notifications.length} color="error">
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Notifications;
