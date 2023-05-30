let requestParameter = getApp();

export function requestApiblackListCode(url, that) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      dataType: 'json',
      data:{data:{
       min: requestParameter.globalData.lineNumber,
      }},
      headers: {
        'X-SESSION-ID': requestParameter.globalData.sessionId,
        'X-MC-LINE': requestParameter.globalData.lineNumber ,
        'X-MC-LOB': '3' ,
        'Content-Type': 'application/json; charset=UTF-8', 
        'Content-Length': '29' ,
        'X-MC-MAIL': requestParameter.globalData.emailUser ,
        'X-MC-SO': 'android' ,
        'X-Carrier': '',
        'X-Wifi': 'true', 
        'X-MC-HE-V': '3' ,
        'X-MC-SO-V': '6.0.1', 
        'Cache-Control': 'no-cache', 
        'X-MC-SO-API': '23' ,
        'X-MC-SO-PHONE-F': 'OnePlus' ,
        'X-MC-SO-PHONE-M': 'HD1907' ,
        'X-MC-APP-V': '15.1.3' ,
        'X-MC-DEVICE-NAME': 'OnePlusHD1907' ,
        'X-MC-DEVICE-ID': '0nabthU+g+4j1/oN1qjNjunwKOAv/dx9hep3C4U/qRbwEiUckZQSLMRSAxcFQtupC3F6BKstX+GzJ5n1uvCDRqr68bOf/hywmKGwc3oqjMMobzO3BZO6VvjkyiaI+oK6iKX2qbpmgkIDC0nt71K8WIT5siqnLN9/9w9dXWqsCYc=' ,
        'X-MC-USER-AGENT': 'eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IEhEMTkwNzsgXHUwMDNjYW5kcm9pZC82LjAuMVx1MDAzZSkifQ==' 
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
