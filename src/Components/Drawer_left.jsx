import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Fab,
} from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "../App.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "MyPage",
    icon: <HomeOutlined />,
  },
  { name: "Login", icon: <InboxOutlined /> },
  { name: "신고하기", icon: <CheckBoxOutlineBlankOutlined /> },
  { name: "Logout", icon: <MailOutline /> },
  { name: "회원가입", icon: <DraftsOutlined /> },
  { name: "Trash", icon: <ReceiptOutlined /> },
];

function Drawer_left() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" id="header">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              id="header"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              야나와!
            </Typography>
            <img
              style={{
                position: "fixed",
                right: "47.5%",
                width: 60,
                height: 60,
              }}
              src="img/Uwon_logo.png"
            />
            <Button onClick={() => navigate("/signup")} color="inherit">
              Sign Up
            </Button>
            <Button onClick={() => navigate("/signin")} color="inherit">
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            position: "absolute",
            bottom: "30px", // 가로로 가운데 정렬

            left: "50%",
            transform: "translate(-50%, 20%)",
          }}
        >
          <Fab
            onClick={() => navigate("/sparkcreate")}
            sx={{}}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
      </Box>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </>
  );
}

export default Drawer_left;
