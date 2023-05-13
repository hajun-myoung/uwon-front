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

export default function MuiPage() {
  return (
    <>
      <Box id="wrapper">
        <Box sx={styles.bottom}>
          <SimpleBottomNavigation selected={"mui"} />
        </Box>
      </Box>
      <BasicCard />
      <BasicCard />
      <BasicCard />
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
