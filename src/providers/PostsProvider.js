import React, { useEffect, useState } from 'react';
import API_POSTS_SERVICE from '../services/api-posts';

export const PostsProvider = React.createContext(null);

function PostsProviderComponent({ children }) {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await API_POSTS_SERVICE.getPostListAsync({});
      setPostsList(data);
      // console.log(data);
    })();
  }, []);
  const onPostsChange = (post) => {
    const newList = postsList.filter((f) => f.id !== post.id);
    setPostsList(newList);
  };

  const onPostsAdd = (newPost) => {
    const newList = [...postsList, newPost];
    setPostsList(newList);
  };

  return (
    <PostsProvider.Provider value={{ postsList, onPostsChange, onPostsAdd }}>
      {children}
    </PostsProvider.Provider>
  );
}

export default PostsProviderComponent;
