import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersPostsPage = () => {
  const [email, setEmail] = useState<string>();
  const storedValue = localStorage.getItem("Email");
  const navigate = useNavigate();
  useEffect(() => {
    if (storedValue) {
      setEmail(storedValue);
    }
  }, [storedValue]);

  console.log(email);
  return (
    <>
      <div className="headerusersposts">{email}</div>
      <div className="go-back-block">
        <button className="back-to-login" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      <div className="users-posts-div">
        <button className="users-btn" onClick={() => navigate("/users")}>
          Users
        </button>

        <button className="posts-btn" onClick={() => navigate("/posts")}>
          Posts
        </button>
      </div>
    </>
  );
};

export default UsersPostsPage;
