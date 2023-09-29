/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Posts from "../test/Posts";
import Clients from "../Clients";

const ProfileTabs = ({ userId, userType }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Videos" value="1" />
            <Tab label="Workouts" value="2" />
            {userType === "trainer" ? <Tab label="Clients" value="3" /> : null}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Posts userId={userId} />
        </TabPanel>
        <TabPanel value="2">Workouts</TabPanel>
        {userType === "trainer" ? (
          <TabPanel value="3">
            <Clients />
          </TabPanel>
        ) : null}
      </TabContext>
    </Box>
  );
};

export default ProfileTabs;
