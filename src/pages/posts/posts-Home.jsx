import AddPostsForm from '../../components/forms/add-posts-form';
import PostList from '../../components/forms/posts-list/posts-lists';
import PostsProviderComponent from '../../providers/PostsProvider';
function PostsHome(props) {
  return (
    <PostsProviderComponent>
      <div className="row">
        <div className="col-6">
          <AddPostsForm />
        </div>
        <div className="col-6">
          <PostList />
        </div>
      </div>
    </PostsProviderComponent>
  );
}
export default PostsHome;
