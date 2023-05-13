import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleBottomNavigation from "../Components/BottomNavigation";

export default function MainPage() {
  return (
    <><iframe src="https://service.dongledongle.com/juminsung10" frameborder="0" width="100%" height="500"></iframe>
    <Box id="wrapper">
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={""} />
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