import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Postsstyle.css";

type posttype = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<posttype | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const email = localStorage.getItem("Email");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  if (!post) {
    return <div>Post Not Found ..!</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h1>{email}</h1>
      <div>
        <button
          className="back-to-posts"
          onClick={() => {
            navigate("/users-posts/posts");
          }}
        >
          Go Back
        </button>
      </div>
      <div className="post-block">
        <p>
          <b>UserId:</b>
          {post.userId}
        </p>
        <p>
          <b>Id:</b>
          {post.id}
        </p>
        <p>
          <b>Title:</b>
          {post.title}
        </p>
        <p>
          <b>Body:</b>
          {post.body}
        </p>
      </div>
    </>
  );
};

export default PostPage;
