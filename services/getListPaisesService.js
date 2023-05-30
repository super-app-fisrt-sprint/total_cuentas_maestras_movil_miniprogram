let requestParameter  = getApp();

export function requestApi(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'GET',
      headers: {
        'X-SESSION-ID':  requestParameter.globalData.sessionId,
        'X-MC-LINE': '3103815747',
        'X-MC-LOB': '3',
        'X-MC-MAIL': 'angie.copete@neoris.com',
        'X-MC-SO': 'android',
        'X-Carrier' : 'Vodafone.de',
        'X-Wifi':'true',
        'X-MC-HE-V':'3',
        'X-MC-SO-V':'7.1.1',
        'Cache-Control':'no-cache',
        'X-MC-SO-API':'25',
        'X-MC-SO-PHONE-F':'OnePlus',
        'X-MC-SO-PHONE-M':'ONEPLUS A5000',
        'X-MC-APP-V':'15.0.0',
        'X-MC-DEVICE-NAME':'OnePlusONEPLUS A5000',
        'X-MC-DEVIDE-ID': '07SN2fsQJzlrArgcOX28TnzMGmoL8cHkn4inYNbDX650Qy6ARG9nAWGUJSrLpZBA8KNaQrvrIvTdsP3cSp1Rbn3J85LQkbonbPnmMxpVZ36GnjoLgAgpZqDQ6EJt9Pm/II65HHme5atvFu5OFOBLZQjr9sC6rCsLJhbjyIkrJ251SjIoOtlznpWPP52gSvjI',
        'X-MC-USER-AGENT': 'eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IE9ORVBMVVMgQTUwMDA7IFx1MDAzY2FuZHJvaWQvNy4xLjFcdTAwM2UpIn0=',
        
      },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
}