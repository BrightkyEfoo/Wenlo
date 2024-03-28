import api from '../../../../utils/Axios';

class AdAccountService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async addAdAccountTransaction(
    user?: number,
    type?: string,
    pay_method?: number,
    amount?: number,
    account_name?: string,
    time_zone?: string,
    domain?: string,
    country?: string,
    draft?: boolean,
    account_type?: string,
    phone_number?: string,
    business_center?: number,
    app_link?: string,
    company_name?: string,
    company_registered_address?: string,
    general_budget?: string,
    age_min_range?: number,
    age_max_range?: number,
    gender?: string,
    api_key?: string,
    assigned_email?: string,
    public_profile_name?: string,
    charges?: number,
    transaction_id?: string,
    transaction_link?: string,
    fichier?: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj: any = {
        user,
        type,
        pay_method,
        amount,
        account_name,
        time_zone,
        domain,
        country,
        draft,
        account_type,
        phone_number,
        business_center,
        app_link,
        company_name,
        company_registered_address,
        general_budget,
        age_min_range,
        age_max_range,
        gender,
        api_key,
        assigned_email,
        public_profile_name,
        charges,
        transaction_id,
        transaction_link,
        fichier,
      };

      const response = await api.instance.post(
        '/balance_management/add-transaction/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editAdAccountTransaction(
    adAccountTransactionId: number,
    user_transaction: number,
    type: string,
    pay_method: number,
    amount: number,
    modif_amount: number,
    charges: number,
    transaction_id: string,
    transaction_link: string,
    fichier: string,
    status: string,
    reason_rejected: string,
    respons_time: string,
    on_hold: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        user_transaction,
        type,
        pay_method,
        amount,
        modif_amount,
        charges,
        transaction_id,
        transaction_link,
        fichier,
        status,
        reason_rejected,
        respons_time,
        on_hold,
      };

      const response = await api.instance.put(
        '/balance_management/edit-transaction/' + adAccountTransactionId+ '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listAdAccount() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get(
        '/balance_management/list-ad-account/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editAdAccount(
    adAccountId?: string,
    user?: number,
    type?: string,
    amount?: number,
    account_name?: string,
    time_zone?: string,
    identity?: string,
    domain?: string,
    country?: string,
    draft?: boolean
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        user,
        type,
        amount,
        account_name,
        time_zone,
        identity,
        domain,
        country,
        draft,
      };

      const response = await api.instance.put(
        '/balance_management/edit-account/' + adAccountId+ '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  /**
   *
   * not still working
   */
  async AddAdAccount() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    // const response = await api.instance.put(
    //   '/balance_management/edit-account/' + adAccountId,
    //   postObj
    // );
    return [0, 'response.data'];
  }
}

const adAccountService = new AdAccountService();

export default adAccountService;
