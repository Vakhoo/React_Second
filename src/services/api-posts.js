const baseURL = 'http://jsonplaceholder.typicode.com/posts';

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
  //   static getTodoList({ start = 0, limit = 10, callback }) {
  //     fetch(baseURL + `?_start=${start}&_limit=${limit}`)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result);
  //         callback(result);
  //       })
  //       .catch((err) => {
  //         console.trace(err);
  //       });
  //   }

  //   static async getTodoItemAsync(todoID) {
  //     try {
  //       const item = await fetch(baseURL + `/${todoID}`);
  //       const result = item.json();
  //       console.log(['ip result '], result);
  //     } catch {}
  //   }
}
export default API_POSTS_SERVICE;
