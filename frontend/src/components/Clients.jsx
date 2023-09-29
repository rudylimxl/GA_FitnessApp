import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";

const Clients = ({ userId }) => {
  const [clientList, setClientList] = useState([]);

  //   const trainerId = sessionStorage.getItem("userdetail");

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/${userId}`
        );
        setClientList(response.data.clients);
      } catch (error) {
        console.error(error);
      }
    };

    getClients();
  }, []);

  return (
    <>
      {clientList.length > 0 ? (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "0 auto",
          }}
        >
          {clientList.map((client) => (
            <>
              <Link overlay href={`/user/${client._id}`}>
                <ListItem alignItems="flex-start" key={client._id}>
                  <ListItemAvatar>
                    <Avatar alt={client.username} src={client.avatarUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span>{client.username}</span>}
                    secondary={client.name}
                  />
                </ListItem>
              </Link>
              <Divider
                component="li"
                sx={{ borderBottomWidth: 2, backgroundColor: "black" }}
              />
            </>
          ))}
        </List>
      ) : (
        <h2>No clients</h2>
      )}
    </>
  );
};

export default Clients;
