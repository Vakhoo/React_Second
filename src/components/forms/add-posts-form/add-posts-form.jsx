function AddPostsForm(props) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          // value={title}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
        />
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          // value={title}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
        />
      </div>
      {/* <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          value={completed}
          onChange={(e) => {
            setCompleted(e.target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="completed">
          Check me out
        </label>
      </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default AddPostsForm;
