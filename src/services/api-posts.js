const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export class API_POSTS_SERVICE {
  static async getPostListAsync({ start = 0, limit = 10 }) {
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
export default API_POSTS_SERVICE;
