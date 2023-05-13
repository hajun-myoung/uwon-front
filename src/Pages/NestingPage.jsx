import { Box, Typography } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import Drawer_left from "../Components/Drawer_left";

function MyButton() {
  return <button>I'm a button</button>;
}

export default function NestingPage() {
  return (
    <>
    <Box id="wrapper">
      <MyButton />
      <Box>
        <Typography>
          코드에서 {"<MyButton />"} 태그를 사용한 게 보이나요? <br />
          이렇게, 함수로 <span style={styles.bold}>사용자 지정 태그</span>를
          만들어 사용할 수 있어요
        </Typography>
      </Box>
      <Box>
        <Typography>
          사용할 사용자 지정 태그를 잘 분리해놓으면, 해당 함수를 Components
          폴더로 빼서 새로운 리액트 요소 파일(jsx) 파일로 만들 수 있어요
        </Typography>
      </Box>
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