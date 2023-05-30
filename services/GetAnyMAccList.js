let requestParameter = getApp();

export function getAnyMAccList(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: that.data.datos,
      headers: {
        "X-MC-MAIL": that.data.email,
        "X-MC-SO": "android",
        "X-Carrier": "Tigo",
        "X-Wifi": true,
        "X-MC-HE-V": 3,
        "X-MC-SO-V": "8.1.0",
        "X-MC-SO-API": 27,
        "X-MC-SO-PHONE-F": "HUAWEI",
        "X-MC-SO-PHONE-M": "DUB-LX3",
        "X-MC-APP-V": "15.0.0",
        "X-MC-DEVICE-NAME": "HUAWEIDUB-LX3",
        'X-SESSION-ID': requestParameter.globalData.tokenGetAnyMAccList,
        "X-MC-USER-AGENT": requestParameter.globalData.tokenUserGetAnyMAccList
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