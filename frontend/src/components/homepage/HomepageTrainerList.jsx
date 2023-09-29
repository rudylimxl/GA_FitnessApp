import { Avatar, Typography, Link } from "@mui/material";
import styles from "./Homepage.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const TrainerListHome = (props) => {
  if (props.trainerListState === "") {
    return <div>loading trainers..</div>;
  } else {
    return props.trainerListState.toReversed().map((e, index) => {
      return (
        <Link href={`/user/${e._id}`} underline="none">
          <div key={index}>
            <div className={styles.trainer}>
              <Avatar src={`${e.avatarUrl}`}></Avatar>
              <Typography>{e.username}</Typography>
            </div>
          </div>
        </Link>
      );
    });
  }
};

export default TrainerListHome;
