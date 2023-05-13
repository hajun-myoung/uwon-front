import { Box, Grid } from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";

export default function SigninPage() {
  return (
    <Box id="wrapper">
      <Box>
        <form action="" name="login" method="post">
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
          <input className="signin" type="submit" name="login" value="로그인" />
          <input
            className="loginoutput"
            type="submit"
            name="signin"
            value="회원가입"
          />
        </form>
      </Box>
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"signin"} />
      </Box>
    </Box>
  );
}
