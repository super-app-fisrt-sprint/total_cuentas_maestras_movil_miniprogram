let requestParameter = getApp();


/**
 * 
 * @param {page} that 
 * @param {string} expirationDate
 */
export function postActivactionRequest(that, expirationDate) {
  let contentLength = expirationDate == '' ? '44' : '54'

  return new Promise((resolve, reject) => {
    my.request({
      url: 'https://apiselfservice.co/api/index.php/v1/soap/activateRoamingService.json',
      method: 'POST',
      dataType: 'json',
      data: {
        data: {
          activar: '1',
          ExpirationDate: expirationDate,
        }
      },
      headers: {
        'X-SESSION-ID': requestParameter.globalData.sessionId,
        'X-MC-LINE': requestParameter.globalData.lineNumber,
        'X-MC-LOB': '3',
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': contentLength,
        'X-MC-MAIL': 'angie.copete@neoris.com',
        'X-MC-SO': 'android',
        'X-Carrier': 'T-Mobile',
        'X-Wifi': true,
        'X-MC-HE-V': '3',
        'X-MC-SO-V': '9',
        'Cache-Control': 'no-cache',
        'X-MC-SO-API': '28',
        'X-MC-SO-PHONE-F': 'samsung',
        'X-MC-SO-PHONE-M': 'SM-S908E',
        'X-MC-APP-V': '15.0.0',
        'X-MC-DEVICE-NAME': 'samsungSM-S908E',
        'X-MC-DEVIDE-ID': 'MuYp8f3XR3n0VAu2xCCSwdhPqxyIEa5Grle2qW7UYKc1OcUA5DQpNe32m7zniC5VEnwpsu+bjzYGC913u9kox32wTFf8sL6aazoGQOIbSLscWEUfewwCVdheqG+5uowtnOVZy7tcAk02SRuHou428FSykiIuADWUQaaXnA+2BGc=',
        'X-MC-USER-AGENT': 'eyJpcCI6IjE3Mi4yMC42NS4xMTgiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChzYW1zdW5nOyBTTS1TOTA4RTsgXHUwMDNjYW5kcm9pZC85XHUwMDNlKSJ9',
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        console.log(res);
        reject(res.data.response);
      }
    });
  });
}