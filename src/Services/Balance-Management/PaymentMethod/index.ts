import api from '../../../utils/Axios';

class PaymentMethodService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async addPaymentMethod(
    title?: string,
    beneficiary_name?: string,
    account_number?: string,
    swift_code?: string,
    account_address?: string,
    email?: string,
    bank_name?: string,
    bank_address?: string,
    routin?: string,
    account_type?: string,
    address?: string,
    network?: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        title,
        beneficiary_name,
        account_number,
        swift_code,
        account_address,
        email,
        bank_name,
        bank_address,
        routin,
        account_type,
        address,
        network,
      };

      const response = await api.instance.post(
        '/balance_management/add-pay-method/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listPaymentMethods() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get(
        '/balance_management/list-pay-method/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editPaymentMethod(
    paymentMethodId: string,
    title?: string,
    beneficiary_name?: string,
    account_number?: string,
    swift_code?: string,
    account_address?: string,
    email?: string,
    bank_name?: string,
    bank_address?: string,
    routin?: string,
    account_type?: string,
    address?: string,
    network?: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        title,
        beneficiary_name,
        account_number,
        swift_code,
        account_address,
        email,
        bank_name,
        bank_address,
        routin,
        account_type,
        address,
        network,
      };

      const response = await api.instance.put(
        '/balance_management/edit-pay-method/' + paymentMethodId + '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listQuestionnaire(paymentMethodId: string) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get(
        '/balance_management/list-pay-method/' + paymentMethodId + '/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const paymentMethodService = new PaymentMethodService();

export default paymentMethodService;
