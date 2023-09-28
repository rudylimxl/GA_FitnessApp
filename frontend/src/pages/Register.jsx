import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const TrainerListSelection = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="selectTrainer">Select Trainer</InputLabel>
      <Select
        labelId="selectTrainer"
        id="trainer"
        value={props.trainer}
        variant="outlined"
        label="selectTrainer"
        onChange={props.handleTrainer}
      >
        {props.trainerList.map((el) => {
          return (
            <MenuItem key={el._id} value={el._id}>
              {el.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const DisableTrainerListSelection = (props) => {
  return (
    <FormControl disabled fullWidth>
      <InputLabel id="selectTrainer">Select Trainer</InputLabel>
      <Select
        labelId="selectTrainer"
        id="trainer"
        value={props.trainer}
        variant="outlined"
        label="selectTrainer"
        onChange={props.handleTrainer}
      >
        {props.trainerList.map((el) => {
          return (
            <MenuItem key={el._id} value={el._id}>
              {el.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let newUser = {
      email: data.get("email"),
      password: data.get("password"),
      userDetail: {
        name: data.get("name"),
        username: data.get("username"),
        age: data.get("age"),
        gender: gender,
        userType: userType,
      },
    };
    if (userType === "user") {
      newUser.trainerId = trainer;
    }
    try {
      const res = await axios.post("http://localhost:8000/signup", newUser);
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainerList, setTrainerList] = useState([]);

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleTrainer = (e) => {
    setTrainer(e.target.value);
  };

  useEffect(() => {
    const getTrainerData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/users/trainers");
        setTrainerList(res.data);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };
    getTrainerData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    value={gender}
                    variant="outlined"
                    label="Gender"
                    onChange={handleGender}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="userType">User Type</InputLabel>
                  <Select
                    labelId="userType"
                    id="userType"
                    value={userType}
                    variant="outlined"
                    label="userType"
                    onChange={handleUserType}
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="trainer">Trainer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                {userType == "user" ? (
                  <TrainerListSelection
                    trainer={trainer.name}
                    handleTrainer={handleTrainer}
                    trainerList={trainerList}
                  />
                ) : (
                  <DisableTrainerListSelection
                    trainer={trainer.name}
                    handleTrainer={handleTrainer}
                    trainerList={trainerList}
                  />
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
