import { Box } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import Drawer_left from "../Components/Drawer_left";
import ComboBox from "../Components/ComboBox";
import BasicCard from "../Components/BasicCard";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import * as API from "../api.js";

import { useEffect, useState, useCallback } from "react";

export default function SparklistPage() {
  const [postList, setPostList] = useState([]);

  const getPost = async () => {
    const res = await API.get("spark");
    setPostList(res?.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    console.log(postList);
  }, [postList]);

  return (
    <>
      <Box id="wrapper">
        <Box sx={styles.bottom}>
          <SimpleBottomNavigation selected={"sparklist"} />
        </Box>
      </Box>
      {postList?.map((post) => (
        <BasicCard
          title={post.title}
          summarize={post.summarize}
          capacity={post.capacity}
          prize={post.prize}
        />
      ))}
      <Box id="wrapper">
        <Box sx={styles.left}>
          <Drawer_left selected={"menu"} />
        </Box>
      </Box>
    </>
  );
}

const styles = {
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};
