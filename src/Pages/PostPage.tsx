import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Postsstyle.css";

type Posttype = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posttype | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleFetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(post.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <h1>{email}</h1>
      <div>
        <button
          className="back-to-posts"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
      {!isLoading && post && (
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
      )}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !post && <div>Post Not Found</div>}
    </>
  );
};

export default PostPage;
