import api from '../../../utils/Axios';

class TransactionService {
  async addTransaction(formdata: FormData | any) {
    try {
      const response = await api.instance.post(
        '/balance_management/add-transaction/',
        formdata
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async listTransactions() {
    try {
      const response = await api.instance.get(
        '/balance_management/list-transaction/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsById(id: string) {
    try {
      const response = await api.instance.get(
        '/balance_management/list-particular-transaction/' + id + '/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async editTransaction(
    id: string,
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
    try {
      const response = await api.instance.put(
        '/balance_management/edit-transaction/' + id + '/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionByStatus(status: string) {
    try {
      const response = await api.instance.post(
        '/balance_management/list-transaction-by-status/',
        { status }
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionByUser(id: string) {
    try {
      const response = await api.instance.get(
        '/balance_management/list-transaction-by-user/' + id + '/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionByPayMethod(id: string) {
    try {
      const response = await api.instance.get(
        '/balance_management/list-transaction-by-pay-method/' + id + '/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async assingTransaction(id: string, assign_to: number) {
    try {
      const response = await api.instance.put(
        '/balance_management/assign-transaction/' + id + '/',
        {
          assign_to,
        }
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsAssignedToAUser(id: string) {
    try {
      const response = await api.instance.get(
        '/balance_management/list-transaction-assigned-to-user/' + id + '/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsAssigned(state: string) {
    try {
      const response = await api.instance.post(
        '/balance_management/list-transaction-assigned/',
        { state }
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsNotAssigned(state: string) {
    try {
      const response = await api.instance.post(
        '/balance_management/list-transaction-not-assigned/',
        { state }
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsOnHoldAndCompleted(on_hold: string) {
    try {
      const response = await api.instance.post(
        '/balance_management/list-transaction-not-assigned/',
        { on_hold }
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async getTotalBalanceOfAllCustomers() {
    try {
      const response = await api.instance.get(
        '/balance_management/balance-all-customer/'
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async totalOpenDepositeAndWithdrawal(
    type: string,
    filter_by_date: string,
    status: string
  ) {
    const postObj = {
      type,
      filter_by_date,
      status,
    };
    try {
      const response = await api.instance.post(
        '/balance_management/total-deposite-and-withdrawal/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTransactionsByType(type: string) {
    const postObj = {
      type,
    };
    try {
      const response = await api.instance.post(
        '/balance_management/list-transaction-by-type/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async filterTotalOpenDepositeAndWithdrawalByDate(
    type: string,
    filter_by_date: string,
    status: string,
    date: string
  ) {
    const postObj = {
      type,
      filter_by_date,
      date,
      status,
    };
    try {
      const response = await api.instance.post(
        '/balance_management/total-deposite-and-withdrawal/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async addAdAccountWithdrawTransaction(
    user: number,
    type: string,
    pay_method: number,
    account_name: string,
    amount: number,
    charges: number,
    transaction_id: string,
    transaction_link: string,
    fichier: string
  ) {
    const postObj = {
      user,
      type,
      pay_method,
      account_name,
      amount,
      charges,
      transaction_id,
      transaction_link,
      fichier,
    };
    try {
      const response = await api.instance.post(
        '/balance_management/add-transaction/',
        postObj
      );
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }

  async addAdAccountTopupTransaction(
    user: number,
    type: string,
    pay_method: number,
    account_name: string,
    amount: number,
    charges: number,
    transaction_id: string,
    transaction_link: string,
    fichier: string
  ) {
    const postObj = {
      user,
      type,
      pay_method,
      account_name,
      amount,
      charges,
      transaction_id,
      transaction_link,
      fichier,
    };
    try {
      const response = await api.instance.post('/questionaire/', postObj);
      return [0, response.data];
    } catch (error: any) {
      return [2, error.message];
    }
  }
}

const transactionService = new TransactionService();

export default transactionService;
