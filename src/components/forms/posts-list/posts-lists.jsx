import { useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';
import PostsListItem from './posts-list-item';

function PostList(props) {
  const { PostList } = useContext(PostsProvider);

  return (
    <div className="list-group">
      {/* {PostList.map((post) => {
        return <PostsListItem post={post} key={post.id} />;
      })} */}
      {console.log(PostList, 'posstss')}
      {/* {console.log(PostList, 'possts')} */}
    </div>
  );
}

export default PostList;
