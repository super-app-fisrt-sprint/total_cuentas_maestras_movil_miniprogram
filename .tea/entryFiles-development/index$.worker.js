/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/hr/hr?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../components/arrow-button/arrow-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../components/loading-component/loading-component?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/antd-mini/es/Icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/antd-mini/es/Loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/antd-mini/es/Button/index?hash=dc16c4564261c93d3748f79b0e515f4d4859b95c');
require('../../node_modules/antd-mini/es/Popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/antd-mini/es/Modal/index?hash=66f61bb6a8cbdd234070309f54142d70e7b16b1a');
require('../../components/modal-accept/modal-accept?hash=cea016cfd3ec1ed0a6adc6c3658e822896f26e72');
require('../../components/hyperlink-button/hyperlink-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../pages/totalMasterAccounts/totalMasterAccounts?hash=a672a96fedce59157b1f267ff948b7459f81aa19');
require('../../pages/totalMasterAccounts/manageYourInvoice/manageYourInvoice?hash=7c0b341e0544a4c36b21325ea50c3d325986fb67');
require('../../pages/webView/webView?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}