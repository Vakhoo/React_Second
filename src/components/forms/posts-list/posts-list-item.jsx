function PostsListItem({ post }) {
  return (
    <div className="list-group-item list-group-item-action list-group-item-success">
      {post.title}
    </div>
  );
}

export default PostsListItem;
