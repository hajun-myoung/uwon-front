import { Box } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import Drawer_left from "../Components/Drawer_left";

export default function MuiPage() {
  return (
    <><Box id="wrapper">
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"mui"} />
      </Box>
    </Box>
    <Box id="wrapper">
    <Box sx={styles.left}>
      <Drawer_left selected={"menu"} />
    </Box>
    </Box></>
  );
}

const styles = {
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};