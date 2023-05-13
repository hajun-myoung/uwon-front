import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>프로필 </Title>
      <Typography component="p" variant="h4">
        Username
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        현재 레이팅 : 2392
        <img style={{position: "relative", top:'5%', left:'10%', width:120, height:120}}src="img/Challenger.png" />
      </Typography>
    </React.Fragment>
  );
}
