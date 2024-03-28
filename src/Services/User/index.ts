import api from '../../utils/Axios';

class UserService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await api.instance.post('/login/', {
        email,
        password,
      });
      if (res?.status !== 200 || !res?.data) {
        return [1, 'mauvaise reponse http'];
      }
      localStorage.setItem('user', JSON.stringify(res.data.user[0]));
      localStorage.setItem('authToken', `Bearer ${res.data.access}`);
      localStorage.setItem('refreshToken', `Bearer ${res.data.refresh}`);
      api.token = `Bearer ${res.data.access}`;
      return [0, res.data];
    } catch (error: any) {
      return [1, error.message];
    }
  }

  async register(
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    try {
      const response = await api.instance.post('/register-user/', {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
      });
      return [0, response.data];
    } catch (error: any) {
      return [1, error.message];
    }
  }

  async getUserList() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/list-user/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async verifyOtp(email: string, otp: string) {
    try {
      const response = await api.instance.post('/verify-otp/', {
        email,
        otp,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async addUser(
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.post('/add-user/', {
        email,
        password,
        firstname,
        lastname,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async resetPasswordOtp(email: string) {
    try {
      const response = await api.instance.post('/reset-password-otp/', {
        email,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async resetPassword(email: string, password: string) {
    try {
      const response = await api.instance.post('/reset-password/', {
        email,
        password,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async userSubscribe(id: string, pricing: string) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.put('/edit-user/' + id + '/', {
        pricing,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const userService = new UserService();

export default userService;
