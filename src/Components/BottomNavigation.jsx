import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeIcon from "@mui/icons-material/Home";
import HtmlIcon from "@mui/icons-material/Html";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";

export default function SimpleBottomNavigation({ selected }) {
  const [value, setValue] = React.useState(selected);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate("/" + newValue);
        }}
      >
        <BottomNavigationAction value="" label="메세지" icon={<MessageIcon />} />
        <BottomNavigationAction value="html" label="맵" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          value="mui"
          label="스파크"
          icon={<HandshakeIcon />}
        />
        <BottomNavigationAction
          value="nesting"
          label="랭킹"
          icon={<GroupIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}