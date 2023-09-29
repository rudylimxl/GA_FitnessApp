/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const ProfileInfo = ({ info }) => {
  const [postCount, setPostCount] = useState(0);
  const getPostCount = (id) => {
    axios
      .get(`https://strongerfitnessapp.onrender.com/posts/count?userId=${id}`)
      .then((res) => {
        setPostCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (info === null) {
      return;
    } else {
      getPostCount(info._id);
    }
  }, [info]);

  return (
    <>
      <Typography variant="h4" sx={{ marginTop: 0 }}>
        {info.username}
      </Typography>
      <Typography>{info.name}</Typography>
      <Typography variant="subtitle2">
        <em>{info.bio}</em>
      </Typography>
      <table style={{ marginTop: "5px" }}>
        <tbody>
          <tr>
            <th>Videos posted</th>
            <th>Workouts</th>
          </tr>
          <tr>
            <td>{postCount}</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProfileInfo;
