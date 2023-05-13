import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();

export default function SparkCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="SparkType"
              label="대결 분야"
              type="text"
              name="SparkType"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="SparkTitle"
              label="대결 제목"
              type="text"
              id="SparkTitle"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="SparkParty"
              label="파티원"
              type="text"
              id="SparkParty"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="SparkReward"
              label="보상"
              type="text"
              id="SparkReward"              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="SparkInfo"
              label="상세 정보"
              type="text"
              id="SparkInfo"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              대결 생성
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
