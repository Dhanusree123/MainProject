import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UsersPostsPage from "./Pages/UsersPostsPage";
import UsersPage from "./Pages/UsersPage";
import PostsPage from "./Pages/PostsPage";
import Post1 from "./Pages/Post1";
import Post2 from "./Pages/Post2";
import Post3 from "./Pages/Post3";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/usersposts" element={<UsersPostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} />
      </Routes>
    </>
  );
};

export default App;
