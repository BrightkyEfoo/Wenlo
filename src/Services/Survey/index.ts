import api from '../../utils/Axios';

class SurveyService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      const token = localStorage.getItem('authToken');
      if (!token) return [1, 'your are not logged'];
      api.token = token;
      return [0, 'succes'];
    } else {
      return [0, 'succes'];
    }
  }

  async answerQuestionnaire(id: number, form: { [key: string]: string }) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      let postObj: any = {};
      postObj.user_id = id;
      const { Q1, Q2, Q3, Q4, Q5, Q6 } = form;
      postObj = { ...postObj, Q1, Q2, Q3, Q4, Q5, Q6 };
      console.log('postObj', postObj);
      const response = await api.instance.post(
        '/answer-questionaire/',
        postObj
      );
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

const surveyService = new SurveyService();

export default surveyService;
