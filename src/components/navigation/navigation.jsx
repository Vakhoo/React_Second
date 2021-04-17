import PropTypes from 'prop-types';
const Navigation = ({ onPageChange, pages }) => {
  return (
    <header className="header pt-4bb">
      <h2 className="text-muted">React Project</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${pages.usersHome ? 'active' : ''}`}
              // className="nav-link active"
              onClick={() => onPageChange('usersHome')}>
              UsersHome
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages.postsHome ? 'active' : ''}`}
              onClick={() => onPageChange('postsHome')}>
              PostsHome
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};
export default Navigation;
