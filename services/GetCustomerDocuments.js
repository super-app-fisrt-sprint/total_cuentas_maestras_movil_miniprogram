let requestParameter = getApp();

export function getCustomerDocuments(url, that) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: that.data.datos,
      headers: {
        "X-SESSION-ID": requestParameter.globalData.tokenGetCustomerDocuments,
        "X-MC-LINE": that.data.datos.data.numeroCuenta,
        "X-MC-LOB": 3,
        "Content-Type": "application/json; charset=UTF-8",
        "Content-Length": 54,
        "X-MC-MAIL": that.data.email,
        "X-MC-SO": "android",
        "X-Carrier": "Orange F",
        "X-Wifi": true,
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "9",
        "Cache-Control": "no-cache",
        "X-MC-SO-API": 28,
        "X-MC-SO-PHONE-F": "samsung",
        "X-MC-SO-PHONE-M": "SM-G988N",
        "X-MC-APP-V": "15.1.3",
        "X-MC-DEVICE-NAME": "samsungSM-G988N",
        "X-MC-DEVICE-ID": requestParameter.globalData.tokenIdCustomerDocuments,
        "X-MC-USER-AGENT": requestParameter.globalData.tokenUserCustomerDocuments
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