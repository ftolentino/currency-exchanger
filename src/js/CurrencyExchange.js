export default class CurrencyExchange {
  static async getCurrencyExchange(country) {
    try {
      let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}`;
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
