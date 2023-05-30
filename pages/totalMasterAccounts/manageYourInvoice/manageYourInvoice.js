import {getCustomerDocuments} from "/services/GetCustomerDocuments.js";

Page({
  data: {
    enterprise: '',
    nit: '',
    email: 'angie.copete@neoris.com',
    url: "https://apiselfservice.co/api/index.php/v1/rest/getCustomerDocuments.json",
    response: {},
    datos: {
      data: {
        "numeroCuenta": '',
        "canal": "hogar"
      }
    },
    buttons: [
      {
        name: 'Paga tu factura aquí',
        stateImg: true,
        imgSrc: '/assets/icons/request_quote_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Descarga tu factura',
        stateImg: true,
        imgSrc: '/assets/icons/download_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Factura digital',
        stateImg: true,
        imgSrc: '/assets/icons/description_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Descubre tus beneficios',
        stateImg: true,
        imgSrc: '/assets/icons/settings_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      }
    ],
    btnStateInvoice: false,
    showLoading: false,
    descriptionModal: '',
    modalVisibleDescription: false,
    messageError: 'Lo sentimos, vuelve a intentarlo más tarde.'
  },
  onLoad(query) {
    my.setNavigationBar({title: "Administra tu factura"});
    this.getCustomerDocumentsList(query);
  },
  getCustomerDocumentsList(info){
    this.setData({ 
      ['datos.data.numeroCuenta']: info.numberAccount,
      enterprise: info.enterprise,
      nit: info.nit
    });
    this.showLoading();
    getCustomerDocuments(this.data.url, this)
      .then(res => {
        if(res.data.error != 1){
          console.log(res);
          let infoUser = res.data.response.usuario;
          let infoInvoice = res.data.response.facturaActual;
          let btnStateInvoice = infoInvoice.pagoOportuno == "No aplica" ? true : false;
          let mapper = {
            nombre: infoUser.nombre,
            ref: infoInvoice.ReferenciaPagoTotal,
            masterAccount: info.numberAccount,
            payDate: infoInvoice.pagoOportuno,
            startDate: infoInvoice.inicioPeriodo,
            endDate: infoInvoice.finPeriodo,
            totalToPay: Number(infoInvoice.valorPagar).toLocaleString('es-CO', {style: 'currency', currency: 'COP'})
          };
          this.setData({
            response: mapper,
            btnStateInvoice: btnStateInvoice
          });

          if(this.data.btnStateInvoice)
            this.$spliceData({buttons: [0, 1]});
          
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
  handleCloseAccept(){},
  onRedirect(e){
    const url = "webViewTest";
    my.navigateTo({
      url: `/pages/webView/webView?url=${url}`
    });
  }
});
