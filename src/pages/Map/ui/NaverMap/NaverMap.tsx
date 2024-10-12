import WebView from 'react-native-webview';
import Style from './style';
const NaverMap = () => {
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script type="text/javascript" 
            src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=wjb1z9zmxh">
            </script>
        </head>
        <body>
          <div id="map" style="width:100%;height:100vh;"></div>
          <script>
            var map = new naver.maps.Map('map', {
              center: new naver.maps.LatLng(37.5665, 126.9780),
              zoom: 10,
            });
          </script>
        </body>
      </html>
    `;
  return (
    <Style.Container>
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://3.36.69.73:8080/NaverMap/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </Style.Container>
  );
};
export default NaverMap;
