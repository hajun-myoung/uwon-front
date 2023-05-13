import { Box, Grid } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";

export default function LoginPage() {
  return (
    <Box id="wrapper">
      <Box>
        <form action="" name="signin" method="post">
          <Grid>
            <Grid xs={12}>
              <input
                className="loginput"
                type="text"
                name="Id"
                placeholder="아이디"
              />
            </Grid>
            <Grid xs={12}>
              <input
                className="loginput"
                type="password"
                name="pw"
                placeholder="비밀번호"
              />
            </Grid>
          </Grid>
          <input
            className="loginbtn"
            type="submit"
            name="login"
            value="로그인"
          />
          <input
            className="signinbtn"
            type="button"
            name="signin"
            value="회원가입"
            onClick="location.href='Signin.jsx'"
          />
        </form>
      </Box>
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"login"} />
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
