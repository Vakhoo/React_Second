import { useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';

function PostsListItem({ post }) {
  const { onPostsChange } = useContext(PostsProvider);
  return (
    <div
      className="list-group-item list-group-item-action list-group-item-success"
      onClick={() => onPostsChange(post)}>
      <div className="fw-bold">{post.title}</div>
      {post.body}
    </div>
  );
}

export default PostsListItem;
