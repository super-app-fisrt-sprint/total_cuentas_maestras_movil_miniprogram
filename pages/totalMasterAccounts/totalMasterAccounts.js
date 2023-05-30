import {getAnyMAccList} from "/services/GetAnyMAccList.js"

Page({
  data: {
    response: [],
    responseTest: {},
    datos: {
      data: null
    },
    enterprise: 'Pruebas Dirección De Servicio Al Cliente Corporativo',
    nit: '900999998',
    email: 'angie.copete@neoris.com',
    url: 'https://apiselfservice.co/M3/Empresas/Postpago/GetAnyMAccList/',
    showLoading: false,
    descriptionModal: '',
    modalVisibleDescription: false,
    messageError: 'Lo sentimos, vuelve a intentarlo más tarde.'
  },
  onLoad(query) {
    my.setNavigationBar({title: "Cuentas Maestras Postpago"});
    this.getTotalAccounts();
  },
  getTotalAccounts(){
    this.showLoading();
    getAnyMAccList(this.data.url, this)
      .then(res => {
        if(res.data.error != 1){
          console.log(res);
          let mapper = res.data.response.masterAccountElement.map(account => {
            return {
              numberAccount: account.masterAccountNumber,
              payDate: account.payDate,
              lineOfBussiness: account.cuenta.LineOfBusiness,
              token: account.cuenta.token
            };
          });
          this.setData({
            response: mapper,
            responseTest: res
          });
          this.hideLoading();
        }else {
          this.setData({
            descriptionModal: this.data.messageError,
            modalVisibleDescription: true
          });
          this.hideLoading();
        }
      })
      .catch(error => {
        this.setData({
          descriptionModal: this.data.messageError,
          modalVisibleDescription: true
        });
        this.hideLoading();
      })
  },
  onNavigatePage(e){
    const numberAccount = e.target.dataset.item.numberAccount;
    my.navigateTo({
      url: `/pages/totalMasterAccounts/manageYourInvoice/manageYourInvoice?nit=${this.data.nit}&numberAccount=${numberAccount}&enterprise=${this.data.enterprise}`
    });
  },
  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false
    });
  },
  handleClose() {
    my.navigateBack({ delta: 1 });
  },
  handleCloseAccept(){}
});
