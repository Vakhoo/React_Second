import { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import PostsHome from './pages/posts';
import UsersHome from './pages/users';

function App() {
  const [page, setPage] = useState({
    usersHome: true,
    postsHome: false,
  });

  const onPageChange = (pageKey) => {
    const updateActivePage = { ...page };
    Object.keys(updateActivePage).forEach((key) => {
      if (key === pageKey) {
        updateActivePage[key] = true;
      } else {
        updateActivePage[key] = false;
      }
    });
    setPage(updateActivePage);
  };
  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      {page.usersHome && <UsersHome />}
      {page.postsHome && <PostsHome />}
    </div>
  );
}

export default App;
