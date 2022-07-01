export default class CurrencyExchange {
  static async getCurrencyExchange() {
    try {
      let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      const response = await fetch(url); 
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
