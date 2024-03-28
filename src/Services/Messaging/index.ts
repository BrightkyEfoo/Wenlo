import api from '../../utils/Axios';

class MessagingService {
  verifyIfTokenExist(): [number, string] {
    if (api.token === '') {
      return [1, 'your are not logged'];
    } else {
      return [0, 'succes'];
    }
  }

  async listMessages() {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.get('/chat/get-messages/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async sendMessage(room: string, id: string, content: string) {
    const isTokenExist = this.verifyIfTokenExist();
    if (isTokenExist[0] !== 0) {
      return isTokenExist;
    }
    try {
      const response = await api.instance.post('/chat/send-message/', {
        room,
        user: id,
        content,
      });
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listRoomMessages(roomId: string) {
    try {
      const response = await api.instance.post('/chat/get-messages/' + roomId + '/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listUserMessages(id: string) {
    try {
      const response = await api.instance.post('/chat/get-messages/' + id + '/');
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listUserMessagesInRoom(id: string , roomId : string) {
    try {
      const response = await api.instance.post(`/chat/get-messages/${id}/${roomId}/`);
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

}

const messagingService = new MessagingService();

export default messagingService;
