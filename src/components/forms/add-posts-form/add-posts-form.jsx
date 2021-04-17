import { useContext, useState } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';

function AddPostsForm(props) {
  const { onPostsAdd } = useContext(PostsProvider);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title,
      body,
      id: Math.random().toString(),
    };
    onPostsAdd(newPost);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default AddPostsForm;
