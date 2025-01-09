import { useNavigate } from "react-router-dom";
import "../styles/Userspostsstyle.css";

const UsersPostsPage = () => {
  const storedValue = localStorage.getItem("email");
  const navigate = useNavigate();

  return (
    <>
      <div className="users-posts-page">
        <div className="headerusersposts">{storedValue}</div>
        <div className="go-back-block">
          <button className="back-to-login" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
        <div className="users-posts-div">
          <button
            className="users-btn"
            onClick={() => navigate("/users-posts/users")}
          >
            Users
          </button>

          <button
            className="posts-btn"
            onClick={() => navigate("/users-posts/posts")}
          >
            Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersPostsPage;
