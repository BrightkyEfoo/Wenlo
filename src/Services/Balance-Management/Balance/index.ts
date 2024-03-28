import api from "../../../utils/Axios";


class BalanceService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async answerQuestionnaire(id: string, q: string[]) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const postObj: any = {};
      postObj.user_id = id;
      q.forEach((el, idx) => {
        postObj[`Q${idx + 1}`] = el;
      });
      const response = await api.instance.post('/answer-questionaire/', postObj);
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listAnswers() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/list-answer/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listQuestionnaire() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/questionaire/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const balanceService = new BalanceService();

export default balanceService;
