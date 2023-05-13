import { Box} from "@mui/material";
import SimpleBottomNavigation from "../Components/BottomNavigation";
import React, {useEffect} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer_left from "../Components/Drawer_left";

const { kakao } = window; 

export default function HtmlPage() {
  
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
          center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };
  
  var map = new kakao.maps.Map(mapContainer, mapOption);

  var imageSrc = "https://ifh.cc/g/AY8vof.png", // 마커이미지의 주소입니다, 싸움 아이콘  제작자: Freepik - Flaticon    
      imageSize = new kakao.maps.Size(50, 56), // 마커이미지의 크기입니다
      imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
  
  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
  
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정 
    clickable: true
  });
  
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);  
  
  // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  var content = null
  
  // 커스텀 오버레이가 표시될 위치입니다 
  var position = new kakao.maps.LatLng(37.54699, 127.09598);  
  
  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1 
  });

  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
var iwContent = '<div>레이팅 : 3279점</div>' +
'<Stack spacing={2} direction="row">' +
'<Button variant="text">수락</Button>' +
'<Button variant="contained">거절</Button>' +
'</Stack>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
content : iwContent,
removable : iwRemoveable
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
  // 마커 위에 인포윈도우를 표시합니다
  infowindow.open(map, marker);  
});
  }, [])
  return (
    <><Box sx={{p: 10}}><div id="map" className = "container-padding"style={{width:'80%',height:'600px'}}></div></Box>
    <Box id="wrapper">
      <Box sx={styles.bottom}>
        <SimpleBottomNavigation selected={"html"} />
      </Box>
    </Box>
    <Box id="wrapper">
      <Box sx={styles.left}>
        <Drawer_left selected={"menu"} />
      </Box>
    </Box>
    
    {/* <Stack spacing={2} direction="row"> 
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>*/}</>
  );
}

const styles = {
  bold: {
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};