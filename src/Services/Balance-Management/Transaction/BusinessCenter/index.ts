import api from '../../../../utils/Axios';

class BusinessCenterService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async addBusinessCenter(
    user: number,
    center_name: string,
    center_identity: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        user,
        center_name,
        center_identity,
      };
      const response = await api.instance.post(
        '/balance_management/add-business-center/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listBusinessCenter() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get(
        '/balance_management/list-business-center/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listBusinessCenterByUser() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get(
        '/balance_management/list-business-center-by-user/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editBusinessCenter(
    business_center_id: string,
    user: number,
    center_name: string,
    center_identity: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj = {
        user,
        center_name,
        center_identity,
      };
      const response = await api.instance.put(
        '/balance_management/add-business-center/' + business_center_id+ '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const businessCenterService = new BusinessCenterService();

export default businessCenterService;
