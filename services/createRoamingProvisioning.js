let requestParameter = getApp();

export function requestApicreateProvisioning(url, packageName, packageValue, startDate, endDate, packageCode, getProfile) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      dataType: 'json',
      data:{data:{
        "packageValue": packageValue,
        "endDate": endDate,
        "packageCode": packageCode,
        "getProfile" : getProfile,
        "packageName": packageName,
        "startDate": startDate,  
      }},
      headers: {
      
        'X-SESSION-ID': requestParameter.globalData.sessionId,
        'X-MC-LINE': requestParameter.globalData.lineNumber, 
        'X-MC-LOB': '3', 
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': '300',
        'X-MC-MAIL': requestParameter.globalData.emailUser,
        'X-MC-SO': 'android', 
        'X-Carrier': 'AT&T',
        'X-Wifi': 'true', 
        'X-MC-HE-V': '3',
        'X-MC-SO-V': '9', 
        'Cache-Control': 'no-cache', 
        'X-MC-SO-API': '28', 
        'X-MC-SO-PHONE-F': 'samsung', 
        'X-MC-SO-PHONE-M': 'SM-S908E', 
        'X-MC-APP-V': '15.1.3' ,
        'X-MC-DEVICE-NAME': 'samsungSM-S908E', 
        'X-MC-DEVICE-ID': '0rKWq8Ksl5GeEWlKPD3Spdg6Km0GDwpwnx83njpTJPCSgFPI7U9Ag3BuW2MXaVOLu3sNCGZ0DoG+AuRTeamIGk8KBkkVEiL0vsqE6Ihmfc8PjxiZ5eqGr591Fqkh8oKtOzKF0H9VFml7fnM+RLohXN734TG5cJG48YxkvcwH7yg=' ,
        'X-MC-USER-AGENT': 'eyJpcCI6IjE3Mi4yNi43OC4yMzYiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChzYW1zdW5nOyBTTS1TOTA4RTsgXHUwMDNjYW5kcm9pZC85XHUwMDNlKSJ9'
              
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}
















