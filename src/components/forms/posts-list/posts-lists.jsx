import { useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';
import PostsListItem from './posts-list-item';
import './posts-lists.css';

function PostList(props) {
  const { postsList } = useContext(PostsProvider);

  return (
    <div className="list-group">
      {postsList.map((post) => {
        return <PostsListItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
