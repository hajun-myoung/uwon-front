import { Box } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";

export default function MuiPage() {
  return (
    <Box id="wrapper">
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"mui"} />
      </Box>
    </Box>
  );
}

const styles = {
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};