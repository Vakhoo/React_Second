const baseURL = 'https://jsonplaceholder.typicode.com/users';

export class API_USERS_SERVICE {
  static async getUsersListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseURL + `?_start=${start}&_limit=${limit}`,
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
    }
  }
}
export default API_USERS_SERVICE;
