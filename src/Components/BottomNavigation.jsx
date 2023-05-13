import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

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
        <BottomNavigationAction value="" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction value="html" label="Html" icon={<HtmlIcon />} />
        <BottomNavigationAction
          value="mui"
          label="Mui"
          icon={<DesignServicesIcon />}
        />
        <BottomNavigationAction
          value="nesting"
          label="Nesting"
          icon={<AirlineStopsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
