import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import Drawer_left from "../Components/Drawer_left";

export default function MainPage() {
  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <iframe
          src="https://service.dongledongle.com/juminsung10"
          frameborder="0"
          width="100%"
          height="90%"
          title="mapApi"
        />
      </Box>
      <Box id="wrapper">
        <Box sx={styles.bottom}>
          <SimpleBottomNavigation selected={""} />
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
};
