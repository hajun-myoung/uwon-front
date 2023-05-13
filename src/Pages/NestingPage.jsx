import { Box, Typography } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import Drawer_left from "../Components/Drawer_left";
import Dashboard from "../Components/dashboard/Dashboard"

export default function NestingPage() {
  return (
    <>
    <Dashboard />
    <Box id="wrapper">
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"nesting"} />
      </Box>
    </Box>
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
  bold: {
    fontWeight: "bold",
  },
};