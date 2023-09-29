import { Typography } from "@mui/material";
import styles from "./Homepage.module.css";
import Paper from "@mui/material/Paper";
import TrainerListHome from "./HomepageTrainerList";
import HomepagePosts from "./HomepagePosts";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  /// get trainers
  const [trainerListState, setTrainerListState] = useState("");

  const getTrainers = () => {
    axios
      .get("http://localhost:8000/users/trainers")
      .then((res) => {
        setTrainerListState(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get posts
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const getTrainerPosts = () => {
    let tempPostsArr = [];
    for (const i of trainerListState) {
      axios
        .get("http://localhost:8000/posts", {
          params: {
            userId: i._id,
          },
        })
        .then((res) => {
          for (const j of res.data) {
            tempPostsArr = [...tempPostsArr, j];
          }
          console.log(tempPostsArr);
        })
        .then(() => {
          setPosts(tempPostsArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getTrainers();
  }, []);

  useEffect(() => {
    if (trainerListState === "") {
      return;
    } else {
      getTrainerPosts();
    }
  }, [trainerListState]);
  ////// ignore the first run when trainerListState is empty

  return (
    <>
      <Typography sx={{ margin: "20px" }}>Get Stronger</Typography>

      <div className={styles.homeContainer}>
        <Paper elevation={3} className={styles.trainerBox}>
          <Typography variant="h5">Top Trainers</Typography>
          <TrainerListHome
            trainerListState={trainerListState}
            setTrainerListState={setTrainerListState}
          ></TrainerListHome>
        </Paper>
        <Paper elevation={3} className={styles.rightBox}>
          <HomepagePosts
            loading={loading}
            posts={posts}
            trainers={trainerListState}
          />
        </Paper>
      </div>
    </>
  );
};

export default Homepage;
