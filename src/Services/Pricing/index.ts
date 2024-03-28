import api from '../../utils/Axios';

class PricingService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async addPricing(
    pricing_name: string,
    TUF: string,
    MAM: string,
    RARS: string,
    PRP: string,
    MAAP: string,
    LCCS: string,
    PAOM: string,
    FCAN: string,
    MU: string,
    TMTUL: string,
    monthly_Billing: string,
    annual_Billing: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        pricing_name,
        TUF,
        MAM,
        RARS,
        PRP,
        MAAP,
        LCCS,
        PAOM,
        FCAN,
        MU,
        TMTUL,
        monthly_Billing,
        annual_Billing,
      };
      const response = await api.instance.post('/add-pricing/', postObj);
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listPricing() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/list-pricing/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editPricing(
    pricing_id: string,
    pricing_name?: string,
    TUF?: string,
    MAM?: string,
    RARS?: string,
    PRP?: string,
    MAAP?: string,
    LCCS?: string,
    PAOM?: string,
    FCAN?: string,
    MU?: string,
    TMTUL?: string,
    monthly_Billing?: string,
    annual_Billing?: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        pricing_name,
        TUF,
        MAM,
        RARS,
        PRP,
        MAAP,
        LCCS,
        PAOM,
        FCAN,
        MU,
        TMTUL,
        monthly_Billing,
        annual_Billing,
      };
      const response = await api.instance.put(
        '/edit-pricing/' + pricing_id+ '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async addPersonalizedPricing(
    pricing_name: string,
    TUF: string,
    MAM: string,
    RARS: string,
    PRP: string,
    MAAP: string,
    LCCS: string,
    PAOM: string,
    FCAN: string,
    MU: string,
    TMTUL: string,
    monthly_Billing: string,
    annual_Billing: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        pricing_name,
        TUF,
        MAM,
        RARS,
        PRP,
        MAAP,
        LCCS,
        PAOM,
        FCAN,
        MU,
        TMTUL,
        monthly_Billing,
        annual_Billing,
      };
      const response = await api.instance.post(
        '/add-personalize-pricing/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
  async listPersonalizedPricing() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/list-personalize-pricing/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const pricingService = new PricingService();

export default pricingService;
