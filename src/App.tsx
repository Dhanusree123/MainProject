import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UsersPostsPage from "./Pages/UsersPostsPage";
import UsersPage from "./Pages/UsersPage";
import UserPage from "./Pages/UserPage";
import PostsPage from "./Pages/PostsPage";
import PostPage from "./Pages/PostPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users-posts" element={<UsersPostsPage />} />
        <Route path="/users-posts/users" element={<UsersPage />} />
        <Route path="/users-posts/users/user/:id" element={<UserPage />} />
        <Route path="users-posts/posts" element={<PostsPage />} />
        <Route path="/users-posts/posts/post/:id" element={<PostPage />} />
      </Routes>
    </>
  );
};

export default App;
