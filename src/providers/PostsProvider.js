import React, { useEffect, useState } from 'react';
import API_POSTS_SERVICE from '../services/api-posts';

export const PostsProvider = React.createContext(null);

function PostsProviderComponent({ children }) {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
      (async () => {
        const data = await API_POSTS_SERVICE.getPostListAsync({
          start: 0,
          limit: 10,
        });
        setPostsList(data);
        //   console.log(data);
      })();
    }, []);


  return (
    <PostsProvider.Provider value={{ postsList }}>
      {children}
    </PostsProvider.Provider>
  );
}

export default PostsProviderComponent;
