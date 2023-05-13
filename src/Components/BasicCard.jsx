import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function BasicdCard() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        연대 배드민턴 짱은 누구?
      </Typography>
      <Typography variant="h5" component="div"></Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        30분 가볍게 배드민턴 1:1
      </Typography>
      <Typography variant="body2">
        모집 인원: 3명
        <br />
        보상: 경험치 +100
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">대결 상세페이지</Button>
    </CardActions>
  </React.Fragment>
);
